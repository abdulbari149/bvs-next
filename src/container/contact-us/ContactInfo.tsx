const contactInfos = [
	{
		id: 1,
		icon: "fas fa-envelope",
		color: "#ad172c",
		text: "admin@bvs.nyc",
		href: "mailto: admin@bvs.nyc",
		tagId: "location-mail",
	},
	{
		id: 2,
		icon: "fas fa-location-arrow",
		color: "#BA2025",
		text: "130 West 37th Street New York, NY 10018",
		href: "https://maps.app.goo.gl/3S2kgXWk48vREADu9",
		tagId: "location-map",
	},
	{
		id: 3,
		icon: "fas fa-phone",
		color: "#ad172c",
		text: "(212) 547-9000",
		href: "tel:212-547-9000",
		tagId: "location-phone",
	},
];

const ContactInfo = () => {
	return (
		<div className="locational">
			{contactInfos.map((info) => {
				return (
					<div
						key={info.id}
						style={{ display: "flex", flexDirection: "row", width: "100%" }}
					>
						<a
							id={info.tagId}
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								textDecoration: "none",
							}}
							href={info.href}
							target={info.tagId === "location-map" ? "_blank" : ""}
						>
							<span
								className="fas fa-envelope text-white"
								style={{
									padding: "2%",
									backgroundColor: info.color,
									borderRadius: 500,
									margin: "auto 2%",
								}}
							></span>
							<h3 style={{ color: "#0e0e0f" }}>{info.text}</h3>
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default ContactInfo;
