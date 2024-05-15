/* eslint-disable @next/next/no-img-element */
const OurTeam = () => {
	return (
		<div className="parallax-view" style={{ marginBottom: "5%" }}>
			<h1 className="our-team-heading">Our Team</h1>
			<div className="responsive-two-column-grid">
				<div className="our-team firstone">
					<img loading="lazy" alt="allen" src="img/allen_azarkian.png" />
					<h1
						className="hover-text white-inside"
						// style="-webkit-text-strokeWidth: thin"
						style={{ WebkitTextStrokeWidth: "thin" }}
					>
						Allen Azarkian
					</h1>
					<h2>CEO / Founder</h2>
				</div>
				<div className="our-team">
					<h1
						className="hover-text white-inside"
						// style="-webkit-text-strokeWidth: thin"
						style={{ WebkitTextStrokeWidth: "thin" }}
					>
						Ken McVeigh
					</h1>
					<h2 style={{ border: "none" }}>Director of BVS / Code and Zoning</h2>
					<img loading="lazy" alt="ken" src="img/ken.png" />
				</div>
			</div>
		</div>
	);
};

export default OurTeam;
