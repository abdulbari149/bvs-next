import ParallaxImage from "@/components/parallax-image";

const ContactUs = () => {
	return (
		<div className="responsive-two-column-grid">
			<div className="contact-left">
				<div className="contact-img">
					<ParallaxImage
						loading="lazy"
						src="img/contact1.png"
						style={{ width: "100%" }}
						alt="image"
					/>
				</div>
			</div>
			<div>
				<div className="contact-right">
					<h1>
						For more information, business opportunities or any questions; reach
						out below
					</h1>
					<form action="https://formsubmit.co/admin@bvs.nyc" method="POST">
						<input type="hidden" name="_next" value="https://bvs.nyc/" />
						<input type="hidden" name="_captcha" value="true" />
						<input type="text" name="_honey" style={{ display: "none" }} />

						<input
							type="text"
							placeholder="Name"
							name="Name"
							style={{ width: "100%" }}
							required
						/>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<input
								type="text"
								placeholder="Subject"
								name="_subject"
								style={{ width: "45%" }}
								required
							/>
							<input
								type="email"
								placeholder="Email"
								name="Email"
								style={{ width: "45%" }}
								required
							/>
						</div>
						<textarea
							placeholder="Message"
							name="Message"
							style={{ width: "100%" }}
							required
						></textarea>

						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
