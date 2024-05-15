import ParallaxImage from "@/components/parallax-image";

/* eslint-disable @next/next/no-img-element */
const AboutUs = () => {
	return (
		<div className="responsive-two-column-grid">
			<div className="outside-about">
				<div className="about-left">
					<h4>Who We Are</h4>
					<h1>About Us</h1>
					<br />
					<h3>
						Our story at BVS, begins with Allen Azarkian AIA. A registered
						Architect, Visionary, and Building Code Expert. Allen has made it
						his mission to provide expert knowledge and services, to
						strategically maneuver and remain compliant with NYC rules and
						regulations in the quickest and most cost-effective manner. We are a
						multidisciplinary tech-enabled project management service, that
						bridges the gaps between the silos of property management and NYC
						municipal agencies. We handle the red tape to ensure you remain
						compliant.
					</h3>
				</div>
			</div>
			<div>
				<div className="about-right">
					<ParallaxImage
						loading="lazy"
						src="/img/homeAbout.png"
						style={{
							width: "110%",
							marginLeft: "-5%",
							objectFit: "cover",
							objectPosition: "0 0",
							cursor: "pointer",
						}}
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
