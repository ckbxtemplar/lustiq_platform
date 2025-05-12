'use server';

import { signIn, signOut, auth } from '@/auth';
import { createUser,getUser, updateUser, checkUserToken, createBillingAddress, fetchBillingAddress } from '@/app/lib/data';
import { sendMail } from '@/app/lib/sendmail';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import {withLocalePrefix} from '@/app/utils/common';
import {getTranslations} from 'next-intl/server';
 
/* USER - Login */
export type AuthenticateState = {
  success: boolean; 
  callbackUrl: string | undefined;
  errorMessage: string | undefined;
	user?: object | null;
};

export async function authenticate(
  prevState: AuthenticateState,
  formData: FormData,
): Promise<AuthenticateState> {
	const email = (formData.get('email')?.toString().trim() ?? '');
  try {
    const result = await signIn('credentials', 
			{
				redirect: false,
				email: email,
				password: formData.get('password'),
			}
		);

		const user = await getUser(email);

		const redirectTo = formData.get('redirectTo');
    const callbackUrl = typeof redirectTo === 'string' ? redirectTo : '/dashboard';

		return { // NEXT_REDIRECT errorral tér vissza ha sikeres az auth
			success: true,						
			callbackUrl:  withLocalePrefix(callbackUrl, user?.language!),
			errorMessage: undefined,			
		};	

  } catch (error) {
		console.log(error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
					return {
						success: false,						
						callbackUrl: undefined,
						errorMessage: 'Invalid credentials.',						
					};										
        default:
					return {
						success: false,						
						callbackUrl: undefined,
						errorMessage: 'Something went wrong.',						
					};						
      }
    }
		return {
			success: false,						
			callbackUrl: undefined,
			errorMessage: 'Something went wrong.',						
		};		    	
  }
}

export async function userSignOut() {
  await signOut({redirect: false});
	revalidatePath("/");
	return true;
}

/* USER - Regist */

const RegistFormSchema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
  confirmPassword: z.string().min(6, { message: 'Password confirmation must be at least 6 characters long.' }),
});

export type RegistUserState = {
  errors?: {
    userCreate?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message: string | null;
};

const createdUser = RegistFormSchema.pick({ email: true, password: true, confirmPassword: true });

export async function registUser(prevState: RegistUserState, formData: FormData): Promise<RegistUserState> 
{
	const t = await getTranslations('server.mail.userActivate');

  const validatedFields = createdUser.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword'),
  });  

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create user.',
    };
  }

  const { email, password } = validatedFields.data;
	const confirmPassword = formData.get('confirmPassword');

  if (password !== confirmPassword) {
    return {
      errors: { confirmPassword: ['Passwords do not match'] },
      message: 'Password confirmation does not match.',
    };
  }

	const hashedPassword = await bcrypt.hash(password,10);	
	const token = generateToken();

	// Sql 
	const user = await createUser(email,hashedPassword,token);
	if (!user || user.success === 0){
		 return {
      errors: { userCreate: [user.message]  },
      message: user.message,
    }
	}

	const callbackurl = ( formData.get('callbackurl') ? '&callbackurl='+formData.get('callbackurl')?.toString() : '' );
	const language = ( formData.get('lang') ? formData.get('lang')?.toString() : 'hu' );
	const response = sendMail({
		email: 'hello@lustiq.eu',
		sendTo: email,
		subject: t('subject')+' | Lustiq Lab',
		html: {
			template: 'user_activate',
			params:{
				username: 'viktor',
				userid: user.userid as string,
				language: language as string,
				callbackurl: callbackurl,
				p1: t('p1'),
				p2: t('p2'),
				p3: t('p3'),
				p4: t('p4'),
				h1: t('h1'),
				button: t('button')
			}
		}
	});

  redirect(`/${language}/regist/success?email=${encodeURIComponent(email)}`);
}

/* USER - Forget Password */

const ForgetPasswordFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type ForgetPasswordState = {
  status?: number | null;
  message?: string | null;
};

const forgetPassword = ForgetPasswordFormSchema.pick({ email: true });

export async function forgetPasswordSend( prevState: ForgetPasswordState | undefined, formData: FormData): Promise<ForgetPasswordState> {
	const def_error = {status:1, message:'Missing or invalid fields.'}
  const validatedFields = forgetPassword.safeParse({
    email: formData.get('email')
  });  

  if (!validatedFields.success) {
    return def_error
  }

	const email = formData.get('email');
	if (email && typeof email === 'string') {
		const user = await getUser(email);
		if (user && user.id) {

			const token = generateToken();
			const userUpdate = await updateUser(user.id, {token:token} );
			const response = sendMail({
				email: 'hello@lustiq.eu',
				sendTo: email,
				subject: 'Forget Password | Lustiq Platform',
				html: {
					template: 'forget_password',
					params:{
						username: 'viktor',
						userid: user.id as string,
						token: token
					}
				}
			});

			return { status: 0,	message: 'Email sent successfully.' }
		} else return def_error;

	} else {
		return def_error
	}
}

/*USER - Change Password*/

const ChangePasswordFormSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
  confirmPassword: z.string().min(6, { message: 'Password confirmation must be at least 6 characters long.' }),
});

export type changePasswordState = {
  errors?: {
    userUpdate?: string[];		
    password?: string[];
    confirmPassword?: string[];
  };
  message: string | null;
};

const cpassword = ChangePasswordFormSchema.pick({ password: true, confirmPassword: true });

export async function changePassword(prevState: changePasswordState, formData: FormData): Promise<changePasswordState> {

  const validatedFields = cpassword.safeParse({
    password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword'),
  });  

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create user.',
    };
  }

  const { password } = validatedFields.data;
	const confirmPassword = formData.get('confirmPassword');
	const userId = formData.get('uid')?.toString() || '';
	const token = formData.get('token')?.toString() || '';

  if (!userId || typeof userId !== 'string') {
    return {
      errors: { userUpdate: ['Missing user ID'] },
      message: 'User ID is required.',
    };
  }	

  if (password !== confirmPassword) {
    return {
      errors: { confirmPassword: ['Passwords do not match'] },
      message: 'Password confirmation does not match.',
    };
  }

	const checkToken = await checkUserToken(userId, token);
	if (!checkToken)
	{
		return {
      errors: { userUpdate: [ 'Invalid token' ]  },
      message: 'Invalid token',
    }
	}

	const hashedPassword = await bcrypt.hash(password,10);	

	const user = await updateUser( userId ,{password:hashedPassword, token:null});
	if (!user){
		 return {
      errors: { userUpdate: [ 'Failed to edit user' ]  },
      message: 'Failed to edit user',
    }
	}

  redirect(`/login?m=password_changed_successfully`);
}

/*PERSONAL DATAS */

const PersonalFormSchema = z.object({
	name: z.string().min(3, { message: 'Username must be at least 3 characters long.' }),
	language: z.string().min(2, { message: 'Please select a language.' }),
});

type PersonalFields = {
  name?: string;
  language?: string;
};

export type personalState = {
	success: boolean | null;
  errors?: {
		name?: string[] | null;
		language?: string[] | null;
  };
  message?: string | null;
	fields?: PersonalFields | null;
};

const personalData = PersonalFormSchema.pick({ name:true, language: true });

export async function personal(prevState: personalState, formData: FormData): Promise<personalState> {
	const name = formData.get('username')?.toString().trim() || undefined;
	const language = formData.get('lang')?.toString().trim() || undefined;
  
	const validatedFields = personalData.safeParse({
		name: name,
    language: language,
  });  

  if (!validatedFields.success) {
    return {
			success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid properties.',
    };
  }

	const d = {name:name, language:language};
	const session = await auth();
	const userUpdate = await updateUser(session?.user?.id!, d );
	if (userUpdate)
		return {
			success: true,
			fields: d,
			message: 'The data was successfully updated.'
		};	
	
	return {
		success: false,
		message: 'Something went wrong',
	};
}

/* USER UPLOAD AVATAR */

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];

const UploadAvatarFormSchema = z.object({
  image: z
    .any()
    .refine((file) => file instanceof File, "File is required.")
    .refine((file) => ALLOWED_FILE_TYPES.includes(file.type), "Invalid file type. Only JPEG and PNG are allowed.")
    .refine((file) => file.size <= MAX_FILE_SIZE, `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`),
});

export type uploadAvatarState = {
	success: boolean | null;
  errors?: {
		image?: string[];
  };
  message?: string | null;
	filename?: string | null;
};

const uavatar = UploadAvatarFormSchema.pick({ image: true });

export async function uploadAvatar(prevState: uploadAvatarState, formData: FormData): Promise<uploadAvatarState> {
	  
	const validatedFields = uavatar.safeParse({
    image: formData.get('image'),
  });  

  if (!validatedFields.success) {
    return {
			success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid image. Failed to update avatar.',
    };
  }
	
	const image = formData.get('image') as File;

	// Fájlnév és mentési útvonal
	const session = await auth();
	const filename = `${session?.user?.id?.slice(0, 8)}-resized-${Date.now()}.jpg`;
	const uploadDir = path.join(process.cwd(), "public/customers/avatars");
	const filepath = path.join(uploadDir, filename);

	// Fájl átméretezése a Sharp segítségével
	const buffer = await image.arrayBuffer();
	const resizedBuffer = await sharp(Buffer.from(buffer))
		.resize(300, 300)
		.jpeg({ quality: 80 })
		.toBuffer();

	// Mentés a szerverre
	const wf = await writeFile(filepath, resizedBuffer);
	const userUpdate = await updateUser(session?.user?.id!, {avatar:filename} );
	if (userUpdate)
		return { 
			success: true, 
			message: 'Avatar uploaded successfully.',
			filename: filename
		};	
		

	return { 
		success: false,
		errors: {image: ['Database error']}  
	};	
}

/* BILLING ADDRESS */

const BillingAddressFormSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
	zipcode: z.string().min(3, { message: 'Zipcode must be at least 3 characters long.' }),
	city: z.string().min(2, { message: 'City must be at least 2 characters long.' }),
	address: z.string().min(4, { message: 'Address must be at least 4 characters long.' }),
  tax: z.union([
    z.string().min(5, { message: 'Tax number must be at least 5 characters long.' }),
    z.literal(""), // Engedélyezi az üres stringet is
  ]),
});

export type billingAddressState = {
	success: boolean | null;
  errors?: {
		name?: string[] | null;
		zipcode?: string[] | null;
		city?: string[] | null;
		address?: string[] | null;
		tax?: string[] | null;
  };
  message?: string | null;
	formData?: Object;
};

const baddress = BillingAddressFormSchema;

export async function billingAddress(prevState: billingAddressState, formData: FormData): Promise<billingAddressState> {
	  
  const formObject = {
    name: formData.get('name') as string,
    zipcode: formData.get('zipcode') as string,
    city: formData.get('city') as string,
    address: formData.get('address') as string,
    tax: formData.get('tax') as string,
  };

	const validatedFields = baddress.safeParse(formObject);

  if (!validatedFields.success) {
    return {
			success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid data. Failed to update billing address.',
			formData: formObject
    };
  }


	const session = await auth();
	const user_id = session?.user?.id;
	if (!user_id) {
		return { 
			success: false,
			message: "User not authenticated.",
			formData: formObject
		};
	}
  const formDataWithUserId = { ...formObject, user_id };
	const result = await createBillingAddress(formDataWithUserId);
	if (result.success && result.id_user_billing_address)
		return { 
			success: true,
			message: "The billing information was modified successfully.",
			formData: formObject
		};	

	return { 
		success: false,
		message: "Something went wrong.",
		formData: formObject  
	};	
}

export async function getBillingAddress()
{
	const session = await auth();
	const user_id = session?.user?.id;	
	if (!user_id) {
		return false;
	}	
	const result = await fetchBillingAddress(user_id);
	
	if (result.success) return result.data;
	
	return false;
}

/* MORE */

function generateToken() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 6; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}
