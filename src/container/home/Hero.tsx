const Hero = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<img
				loading="lazy"
				alt="topper"
				src="img/topper.png"
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					position: "relative",
				}}
			/>
			<img
				loading="lazy"
				alt="logo"
				style={{
					position: "absolute",
					zIndex: 90,
					top: 0,
					left: "7%",
					right: 0,
					bottom: 0,
					margin: "auto",
					width: "25vmax",
				}}
				draggable="false"
				src="img/open_logo.png"
			/>
			<img
				loading="lazy"
				alt="filled-logo"
				id="filled-logo"
				style={{
					position: "absolute",
					zIndex: 90,
					top: 0,
					left: "7%",
					right: 0,
					bottom: 0,
					margin: "auto",
					width: "25vmax",
				}}
				draggable="false"
				src="img/filled_logo.png"
			/>
			<h1
				className="hover-text"
				style={{
					position: "absolute",
					top: "20%",
					left: 0,
					zIndex: 10,
					fontSize: "5vmax",
					borderBottom: "#BA2025 5px solid",
					padding: "2% 2% 1.5% 0",
					fontWeight: "bold",
				}}
			>
				Your Violations
			</h1>
			<h1
				className="hover-text white-inside"
				style={{
					position: "absolute",
					bottom: "20%",
					right: 0,
					zIndex: 10,
					fontSize: "5vmax",
					borderBottom: "#fff 5px solid",
					padding: "2% 0 1.5% 2%",
					fontWeight: "bold",
					WebkitTextStrokeColor: "#fff",
				}}
			>
				Our Solutions
			</h1>
		</div>
	);
};

export default Hero;
