function Contact(){
    return(
        // <div className="contact">
        //     <p>Contact Us</p>
        // </div>
        <section class="contact">
		<div class="content">
			<h2>Contact Us</h2>
			<p>Get in touch with us today for any enquiries and we will get back to you as soon as possible</p>
		</div>
		<div class="container">
			<div class="contactInfo">
				<div class="box">
					<div class="icon"><ion-icon name="location-outline"></ion-icon></div>
					<div class="text">
						<h3>Address</h3>
						<p> Dar Al-Muddathir - Malindi, Kenya</p>
					</div>
				</div>
				<div class="box">
					<div class="icon"><ion-icon name="call-outline"></ion-icon></div>
					<div class="text">
						<h3>Phone</h3>
						<p>+254724396365</p>
					</div>
				</div>
				<div class="box">
					<div class="icon"><ion-icon name="mail-outline"></ion-icon></div>
					<div class="text">
						<h3>Email</h3>
						<p>mhdsaggafsiyu@gmail.com</p>
					</div>
				</div>
				<h2 class="txt">Connect with us</h2>
				<ul class="sci">
					<li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
					<li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
					<li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
					<li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
				</ul>
			</div>

			<div class="contactForm">
				<form>
					<h2>Send Message</h2>
					<div class="inputBox">
						<input type="text" name="" required="required"/>
						<span>Full Name</span>
					</div>
					<div class="inputBox">
						<input type="text" name="" required="required"/>
						<span>Email</span>
					</div>
					<div class="inputBox">
						<textarea required="required"></textarea>
						<span>Type your Message...</span>
					</div>
					<div class="inputBox">
						<input type="submit" value="Send"/>
					</div>
				</form>
			</div>
		</div>
	</section>
    )
}

export default Contact;