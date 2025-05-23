'use client';

import { contactForm, ContactFormState } from '@/app/lib/actions';
import { useActionState, useEffect, useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
	const initialState: ContactFormState = { 
		state:null, errors: { }, message: null, fields: {} 
	};
	const [state, formAction, isPending] = useActionState(contactForm, initialState);	

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: 'General questions',
    message: ''
  });

  useEffect(() => {  
    if (state.state === 1 && state?.fields) {
      setFormData((prev) => ({ ...prev, ...state.fields }));
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };	

	return (
	<section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
		<div className="container decoration_wrap">
			<div className="row justify-content-center">
				<div className="col col-lg-7">
					<div className="section_heading text-center">
						<h2 className="heading_text mb-0">
							Contact Our Support Team to Know What You Want
						</h2>
					</div>
				</div>
			</div>

			<form action={formAction}>
				<div className="row justify-content-center">
					<div className="col col-lg-8">
						<div className="row">
							<div className="col col-md-6">
								<div className="form_item m-0">
									<label htmlFor="input_name" className="input_title">Name</label>
									<input 
									id="input_name" 
									type="text" 
									name="name" 
									placeholder="Your Name" 
									required
									value={formData.name} 
									onChange={handleChange} 
									/>
									{state.errors?.name && (
										<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
											{state.errors?.name &&
												state.errors.name.map((error: string) => (
													<p className="m-0 text-sm text-red-500" key={error}>
														{error}
													</p>
												))}
										</div>	
									)}													
								</div>
							</div>
							<div className="col col-md-6">
								<div className="form_item m-0">
									<label htmlFor="input_email" className="input_title">Email</label>
									<input 
									id="input_email" 
									type="email" 
									name="email" 
									placeholder="Your Email" 
									required
									value={formData.email}
									onChange={handleChange} 									
									/>
									{state.errors?.email && (
										<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
											{state.errors?.email &&
												state.errors.email.map((error: string) => (
													<p className="m-0 text-sm text-red-500" key={error}>
														{error}
													</p>
												))}
										</div>	
									)}													
								</div>
							</div>
							<div className="col col-md-6">
								<div className="form_item m-0">
									<label htmlFor="input_phone" className="input_title">Phone</label>
									<input 
									id="input_phone" 
									type="tel" 
									name="telephone" 
									placeholder="Your Phone"
									value={formData.telephone}
									onChange={handleChange} 
									/>
								</div>
							</div>
							<div className="col col-md-6">
								<div className="form_item m-0">
									<label htmlFor="input_jubject" className="input_title">Subject</label>
									<select 
									name="subject" 
									id="input_jubject"
									value={formData.subject}
									onChange={handleChange}>
										<option value="Question about courses">Question about courses</option>
										<option value="General questions" selected>General questions</option>
										<option value="Technical problem">Technical problem</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div className="form_item">
									<label htmlFor="input_message" className="input_title">Message</label>
									<textarea 
									id="input_message" 
									name="message" 
									placeholder="Type Your Message" 
									required
									value={formData.message}
									onChange={handleChange}></textarea>
									{state.errors?.message && (
										<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
											{state.errors?.message &&
												state.errors.message.map((error: string) => (
													<p className="m-0 text-sm text-red-500" key={error}>
														{error}
													</p>
												))}
										</div>	
									)}												
								</div>
								<button type="submit" className="btn btn_dark w-100 b-block" aria-disabled={isPending}>
									<span>
										<small>Send Your Message</small>
										<small>Send Your Message</small>
									</span>
								</button>
								{ state.state==1 && state.message && (	<div className="alert alert-success d-flex align-items-center gap-1 mt-3 py-1" role="alert" aria-live="polite" aria-atomic="true">{state.message}</div> )}						
							</div>
						</div>
					</div>
				</div>
			</form>

			<div className="deco_item shape_img_1 wow fadeInUp" data-wow-delay=".2s">
				<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
			</div>
			<div className="deco_item shape_img_2 wow fadeInUp" data-wow-delay=".4s">
				<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
			</div>
		</div>

		<div className="deco_item shape_img_3 wow fadeInLeft" data-wow-delay=".2s">
			<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
		</div>
		<div className="deco_item shape_img_4 wow fadeInRight" data-wow-delay=".4s">
			<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
		</div>
	</section>	
	)
}
