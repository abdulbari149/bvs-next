const ParallaxView = () => {
	return (
		<div className="parallax-view">
			<div className="responsive-three-column-grid">
				<div className="stat">
					<h1 className="hover-text">5,708</h1>
					<h2>Violations Resolved</h2>
				</div>
				<div className="stat">
					<h1 className="hover-text">689</h1>
					<h2>Properties Monitored</h2>
				</div>
				<div className="stat">
					<h1 className="hover-text">23+</h1>
					<h2>Years In Business</h2>
				</div>
			</div>

			<div className="responsive-two-column-grid">
				<div className="stats-left">
					<h1>
						Where the grey area becomes
						<b
							className="hover-text white-inside"
							style={{
								WebkitTextStrokeColor: "white",
								WebkitTextStrokeWidth: "thin",
							}}
						>
							clear
						</b>
					</h1>
				</div>
				<div className="stats-right" style={{ paddingBottom: "5%" }}>
					<h5 style={{ color: "white", fontFamily: "Tenorite, sans-serif" }}>
						Our team of New York City professionals is dedicated to leveraging
						the most advanced industry technology to seamlessly manage and track
						all permits for your project. We are committed to{" "}
						<b>assisting owners and tenants</b> in swiftly securing{" "}
						<b>aggressive permit approvals</b>, ensuring a{" "}
						<b>smooth and timely construction process to completion.</b>{" "}
					</h5>
					<button style={{ color: "#fff" }}>- Get in Touch</button>
				</div>
			</div>
		</div>
	);
};

export default ParallaxView;
