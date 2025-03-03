"use client"

import ReactFlagsSelect from "react-flags-select";
import { signIn } from "next-auth/react";
import { useState, useEffect, useRef, useActionState } from "react";
import { Button } from '../button';
import {useDropzone} from 'react-dropzone'
import { uploadAvatar, uploadAvatarState, languageSelect, languageSelectState  } from '@/app/lib/user-actions';
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

	const initialStateLanguage: languageSelectState = { 
		errors: { }, message: null 
	};
	const initialStateAvatar: uploadAvatarState = { 
		success: null, errors: { }, message: null 
	};	
	const [stateLanguage, formActionLanguage, isPendingLanguage] = useActionState(languageSelect, initialStateLanguage);	
	const [stateAvatar, formActionAvatar, isPendingAvatar] = useActionState(uploadAvatar, initialStateAvatar);	
	const [selected, setSelected] =  useState("GB");

	useEffect(() => {  
    if (stateLanguage.message === "Ok" && session?.user) {
        const newName = "Béla";

        update({
            user: {
                ...session.user,
                name: newName,
            }
        }).then(() => console.log("3: Session updated!"));
    }
}, [stateLanguage.message]);

	return <>
		<form action={formActionLanguage}>
			<div className="register_form py-5">
				<div className="row">
					<div className="col-12 form_item">
						<p>E-mail cím:</p>
						<input type="email" id="email" disabled value={session?.user?.email || ""}/>
						{/* {state.errors?.email && (
							<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
								{state.errors?.email &&
									state.errors.email.map((error: string) => (
										<p className="m-0 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>	
						)}	 */}
					</div>					
					<div className="col-12 form_item">
						<p>Megszólítás:</p>
						<input type="text" id="username" name="username" placeholder="Username" defaultValue={session?.user?.name || ""}/>
						{/* {state.errors?.email && (
							<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
								{state.errors?.email &&
									state.errors.email.map((error: string) => (
										<p className="m-0 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>	
						)}	 */}
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
					</div>
					<input type="hidden" name="lang" value={selected} />
					<div className="col-12 mt-3">
					{/* {state.errors?.email && (
						<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
							{state.errors?.email &&
								state.errors.email.map((error: string) => (
									<p className="m-0 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>	
					)}	 */}			

						{ stateLanguage.message && (	<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">{stateLanguage.message}</div> )}
										
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

					{ stateAvatar.message && (	<div className="alert alert-warning d-flex align-items-center gap-1 mt-3 py-1" role="alert" aria-live="polite" aria-atomic="true">{stateAvatar.message}</div> )}
								
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

export function BillingAddressForm() {
	const [selected, setSelected] = useState(null);

	return "....";
}