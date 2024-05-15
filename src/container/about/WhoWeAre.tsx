import ParallaxImage from "@/components/parallax-image";

const WhoWeAre = () => {
	return (
		<div className="responsive-two-column-grid" style={{ marginTop: "5%" }}>
			<div className="left-container1">
				<h2 style={{ textAlign: "center" }}>- Who We Are -</h2>
				<h1 className="hover-text about-hover" style={{ textAlign: "center" }}>
					Building Violation Solutions
				</h1>
				<h4 style={{ textAlign: "center", lineHeight: 1.75 }}>
					Building Violation Solutions Inc., provides expedient resolutions and
					closures to violations issued by New York City Building authorities.
					BVS partners with its sister company of architects, engineers and
					contractors to provide our clients with all-inclusive services that
					are unparalleled in the industry. By guiding our clients through the
					technicalities, procedural forms, and legalities concerning their
					respective properties, we have distinguished ourselves from the
					standard firm.
				</h4>
			</div>
			<div>
				<div className="photo-container">
					<ParallaxImage
						loading="lazy"
						src="img/about1.png"
						style={{ width: "100%" }}
						alt="image"
					/>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
