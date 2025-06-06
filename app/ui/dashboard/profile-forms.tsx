"use client"

import ReactFlagsSelect from "react-flags-select";
import { signIn } from "next-auth/react";
import { useState, useEffect, useRef, useActionState } from "react";
import { Button } from '../button';
import {useDropzone} from 'react-dropzone'
import { uploadAvatar, uploadAvatarState, personal, personalState, billingAddress, billingAddressState, getBillingAddress  } from '@/app/lib/user-actions';
import { useSession } from "next-auth/react";

function ImageDropZone(props: {required: boolean, name: string}) 
{
  const {required, name} = props; 	
	const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<Array<File & { preview: string }>>([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
		onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }			
      setFiles(incomingFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })));
    }
  });
  
	const thumbs = files.map((file, index) => (
		<div className="thumb" key={file.name}>
			<div className="thumbInner">
				<img
					src={file.preview}
					className="img"
					onLoad={() => { URL.revokeObjectURL(file.preview); }}
				/>
			</div>
			<div className="img_delete position-absolute">
				<button	onClick={() => removeImage()}>
						<i className="fal fa-times text-white"></i>
				</button>			
			</div>
		</div>
	));	

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

	const removeImage = () => {
		setFiles([]); // Kiürítjük a fájlokat
		if (hiddenInputRef.current) {
			hiddenInputRef.current.value = ""; // Input mező törlése
		}
	};

  return (
			<div className="row align-items-center mt-0">
				<div className="col-8">
					<div {...getRootProps({className: 'dropzone'})}>
						<input type ="file" name={name} required={required} style ={{height:'1px', width:'1px', opacity: 0}} ref={hiddenInputRef}/>
						<input {...getInputProps()} />
						<span>Drag 'n' drop your<br/>avatar image here</span>
					</div>
				</div>
				<div className="col-4 text-center thumb_container">
					{thumbs.length ? thumbs : <i className="fas fa-user-circle fa-4x text-grey"></i>}
				</div>
			</div>
  );
}

export function PersonalDataForm() {
	const { data: session, update } = useSession();

	const initialStatePersonal: personalState = { 
		success:null, errors: { }, message: null 
	};
	const initialStateAvatar: uploadAvatarState = { 
		success: null, errors: { }, message: null 
	};	
	const [statePersonal, formActionPersonal, isPendingPersonal] = useActionState(personal, initialStatePersonal);	
	const [stateAvatar, formActionAvatar, isPendingAvatar] = useActionState(uploadAvatar, initialStateAvatar);	
	const [selected, setSelected] =  useState("GB");

	useEffect(() => {  
    if (statePersonal.message === "Ok" && session?.user) {
        const newName = "Béla";

        update({
            user: {
                ...session.user,
                name: newName,
            }
        }).then(() => console.log("Session updated! Personal datas"));
    }
	}, [statePersonal.message]);

	useEffect(() => {  
    if (stateAvatar.success === true && session?.user && stateAvatar.filename) {
        const newImage = stateAvatar.filename;
        update({
            user: {
                ...session.user,
                image: newImage,
            }
        }).then(() => console.log("Session updated! image"));
    }
	}, [stateAvatar.filename]);	

	return <>
		<form action={formActionPersonal}>
			<div className="register_form py-5">
				<div className="row">
					<div className="col-12 form_item">
						<p>E-mail cím:</p>
						<input type="email" id="email" disabled value={session?.user?.email || ""}/>
					</div>					
					<div className="col-12 form_item">
						<p>Megszólítás:</p>
						<input type="text" id="username" name="username" placeholder="Username" defaultValue={session?.user?.name || ""}/>
						{statePersonal.errors?.name && (
							<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
								{statePersonal.errors?.name &&
									statePersonal.errors.name.map((error: string) => (
										<p className="m-0 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>	
						)}	
					</div>						
					<div className="col-12 form-item">
						<p>Nyelv választása:</p>						
						<ReactFlagsSelect 
							className="language-select"
							selected={selected}
							onSelect={code => setSelected(code)} 
							countries={["GB", "HU"]}
							customLabels={{ GB: "English", HU: "Magyar" }}
							placeholder="Select Language" 
							searchPlaceholder="Select your language" />
							{statePersonal.errors?.language && (
								<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
									{statePersonal.errors?.language &&
										statePersonal.errors.language.map((error: string) => (
											<p className="m-0 text-sm text-red-500" key={error}>
												{error}
											</p>
										))}
								</div>	
							)}
						<input type="hidden" name="lang" value={selected} />															
					</div>
					<div className="col-12 mt-3">

					{ statePersonal.success && statePersonal.message && (	<div className="alert alert-success d-flex align-items-center gap-1 mt-3 py-1" role="alert" aria-live="polite" aria-atomic="true">{statePersonal.message}</div> )}
								
					</div>					
					<div className="col-12 text-end mt-3">
						<Button type="submit" className="btn btn_dark btn_small">
							<span>
								<small>Modify</small>
								<small>Modify</small>
							</span>
						</Button>	
					</div>	
				</div>
			</div>
		</form>	

		<form action={formActionAvatar}>
			<div className="register_form py-5 my-5">
				<div className="row">
					<div className="col-12 form-item">
						<p>Avatar kép:</p>
						<ImageDropZone name="image" required />						
					</div>
					<div className="col-12 mt-3">
					{stateAvatar.errors?.image && (
						<div className="alert alert-warning d-flex align-items-center gap-1 mt-3 py-1" role="alert" aria-live="polite" aria-atomic="true">
							{stateAvatar.errors?.image &&
								stateAvatar.errors.image.map((error: string) => (
									<p className="m-0 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>	
					)}		

					{ stateAvatar.success && stateAvatar.message && (	<div className="alert alert-success d-flex align-items-center gap-1 mt-3 py-1" role="alert" aria-live="polite" aria-atomic="true">{stateAvatar.message}</div> )}
								
					</div>
					<div className="col-12 text-end mt-3">
						<Button type="submit" className="btn btn_dark btn_small">
							<span>
								<small>Set Image</small>
								<small>Set Image</small>
							</span>
						</Button>	
					</div>	
				</div>
			</div>
		</form>
	</>
}
interface BillingAddress {
  name: string;
  zipcode: string;
  city: string;
  address: string;
  tax: string;
}

export function BillingAddressForm() {
	
	const [formData, setFormData] = useState<BillingAddress>({ name: "", zipcode: "", city: "", address: "", tax: "" });

	useEffect(() => {
		const fetchData = async () => {
			const fetchedData = await getBillingAddress(); // Megvárjuk az aszinkron hívást
	
			if (fetchedData) {
				setFormData(fetchedData);
			}
		};
	
		fetchData(); // Az adatok betöltése
	}, []);

	const initialStateBillingAddress: billingAddressState = { 
		success: null, errors: { }, message: null 
	};	
	const [stateBillingAddress, formActionBillingAddress, isPendingBillingAddress] = useActionState(billingAddress, initialStateBillingAddress);	
	useEffect(() => {  
		if (stateBillingAddress.formData) {
			setFormData(stateBillingAddress.formData  as BillingAddress);
		}
	}, [stateBillingAddress.formData]);	

	return 	<form action={formActionBillingAddress}>
	<div className="register_form py-5">
		<div className="row">			
			<div className="col-12 form_item">
				<p>Számlázási név:</p>
				<input 
					type="text" 
					id="name" 
					name="name" 
					placeholder="Számlázási név"
					value={formData.name} 
					onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
				/>
				{stateBillingAddress.errors?.name && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{stateBillingAddress.errors?.name &&
							stateBillingAddress.errors.name.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}	
			</div>						
			<div className="col-12 form_item mb-0">
				<p>Szálázási cím:</p>
			</div>			
			<div className="col-12 col-md-4 form_item">
				<input 
					type="text" 
					id="zipcode" 
					name="zipcode" 
					placeholder="Irányítószám" 
					defaultValue={formData.zipcode}
					onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
				/>
				{stateBillingAddress.errors?.zipcode && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{stateBillingAddress.errors?.zipcode &&
							stateBillingAddress.errors.zipcode.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}		
			</div>
			<div className="col-12 col-md-8 form_item">
				<input 
					type="text" 
					id="city" 
					name="city" 
					placeholder="Település"  
					value={formData.city}
					onChange={(e) => setFormData({ ...formData, city: e.target.value })}
				/>
				{stateBillingAddress.errors?.city && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{stateBillingAddress.errors?.city &&
							stateBillingAddress.errors.city.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}		
			</div>			
			<div className="col-12 form_item">
				<input 
					type="text" 
					id="address" 
					name="address" 
					placeholder="Cím"  
					defaultValue={formData.address}
					onChange={(e) => setFormData({ ...formData, address: e.target.value })}
				/>
				{stateBillingAddress.errors?.address && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{stateBillingAddress.errors?.address &&
							stateBillingAddress.errors.address.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}		
			</div>				
			<div className="col-12 form_item mb-0">
				<p>Adószám (opcionális, cégeknél kötelező):</p>
			</div>				
			<div className="col-12 form_item">
				<input 
					type="text" 
					id="tax" 
					name="tax" 
					placeholder="Adószám"  
					defaultValue={formData.tax}
					onChange={(e) => setFormData({ ...formData, tax: e.target.value })}
				/>
				{stateBillingAddress.errors?.tax && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{stateBillingAddress.errors?.tax &&
							stateBillingAddress.errors.tax.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}		
			</div>					
			<div className="col-12 mt-3">

			{ stateBillingAddress.success && stateBillingAddress.message && (	<div className="alert alert-success d-flex align-items-center gap-1 mt-3 py-1" role="alert" aria-live="polite" aria-atomic="true">{stateBillingAddress.message}</div> )}
						
			</div>					
			<div className="col-12 text-end mt-3">
				<Button type="submit" className="btn btn_dark btn_small">
					<span>
						<small>Save</small>
						<small>Save</small>
					</span>
				</Button>	
			</div>	
		</div>
	</div>
</form>;
}