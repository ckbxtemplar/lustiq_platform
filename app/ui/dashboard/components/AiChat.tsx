export default function Quiz() {
	return (	
<div className="container d-flex flex-column vh-50 mt-2" >

	<div className="d-flex justify-content-center gap-2 mb-2">
		<ul className="tags_list unordered_list d-flex justify-content-center mb-3" style={{flexWrap:'nowrap'}}>
			<li className="flex-item text-center"><a href="#section_personal_data shadow-lg p-3" style={{borderWidth:'medium'}}>Hogyan fejezhetem ki az igényeimet határozottan,<br/>de udvariasan?</a></li>
			<li className="flex-item text-center"><a href="#section_billing_address shadow-lg p-3" style={{borderWidth:'medium'}}>Mit mondhatok, ha nemet szeretnék mondani anélkül,<br/>hogy bűntudatom lenne?</a></li>
			<li className="flex-item text-center"><a href="#section_billing_address shadow-lg p-3" style={{borderWidth:'medium'}}>Hogyan kezelhetem azokat a helyzeteket,<br/>amikor valaki nem veszi figyelembe a határaimat?</a></li>						
		</ul>
	</div>

	<div className="overflow-auto p-3">
			<div className="d-flex flex-column gap-3 chat-messages">
					<div className="chat-msg rounded rounded-3 bg-white align-self-start">Szia! Miben segíthetek?</div>
					<div className="chat-msg rounded rounded-3 bg-yellow align-self-end"><span>Mondj egy érdekes tényt!</span></div>
					<div className="chat-msg rounded rounded-3 bg-white align-self-start"><span>Tudtad, hogy a polipoknak három szívük van?</span></div>
					<div className="chat-msg rounded rounded-3 bg-yellow align-self-end"><span>Üdvözöllek a videós kurzusunk első részében, amelynek célja, hogy stabilabbá és harmonikusabbá tegyük a párkapcsolatodat a hatékony kommunikáció eszközeivel. A mai témánk: az asszertív kommunikáció alapjai.</span></div>					
					<div className='my-4'></div>
			</div>
	</div>


	<div className="comment_form_wrap my-3">
		<form action="#">
			<div className="row">
				<div className="col">
					<div className="form_item mb-2">
						<input id="a" name="a" placeholder="Message" style={{ border: "2px solid #1f1d0d", backgroundColor: "white"}}/>
					</div>
					<button type="submit" className="btn btn_dark">
						<span>
							<small>Send Message</small>
							<small>Send Message</small>
						</span>
					</button>
				</div>
			</div>
		</form>
	</div>
</div>
	)
}