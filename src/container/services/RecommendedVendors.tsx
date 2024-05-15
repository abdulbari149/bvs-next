import Link from "next/link";
import VendorName from "./VendorName";

const vendors = [
	{
		id: 1,
		name: "Azark",
		link: "https://azark.com",
		description: "Inspections and Owner's Rep",
		phone: "212-547-9000",
		email: "admin@azark.com",
		tagId: "azark-ser",
	},
	{
		id: 2,
		name: "AAPC",
		link: "https://aapc.nyc",
		description: "Architecture and Drafting",
		phone: "212-547-9000",
		email: "admin@aapc.nyc",
		tagId: "aapc-ser",
	},
	{
		id: 3,
		name: "ArkCo",
		link: "https://arkco.nyc",
		description: "Design and Construction",
		phone: "212-292-8226",
		email: "admin@arkco.nyc",
		tagId: "arkco-ser",
	},
	{
		id: 4,
		name: "Violerts",
		link: "https://violerts.com",
		description: "Property Database and Alerts",
		phone: "212-401-6011",
		email: "admin@violerts.com",
		tagId: "violerts-ser",
	},
	{
		id: 5,
		name: "VPS",
		link: "https://vps.nyc",
		description: "Digital and Printed Media",
		phone: "212-294-5974",
		email: "admin@vps.nyc",
		tagId: "vps-ser",
	},
];

const RecommendedVendors = () => {
	return (
		<>
			<h1
				id="rec-ven"
				style={{ textAlign: "center", fontWeight: "bold", marginBottom: "2%" }}
			>
				Recommended Vendors
			</h1>
			<h4
				id="ven-text"
				style={{ textAlign: "center", width: "70%", margin: "auto" }}
			>
				BVS works hand in hand with our affiliated sister companies to ensure a
				smooth process from beginning to end.
			</h4>

			{vendors.map((vendor, index) => {
				return (
					<div key={vendor.id} className="ser-container">
						<VendorName
							className={index % 2 == 0 ? "ser-left1" : "ser-right2"}
							vendor={vendor}
						/>
						<div className={index % 2 == 0 ? "ser-right1" : "ser-left2"}>
							<h1>{vendor.description}</h1>
							<div style={{ justifyContent: "center", alignItems: "center" }}>
								<a href={`tel:${vendor.phone}`}>
									<span
										className="fas fa-phone text-white"
										style={{
											padding: "2.5%",
											backgroundColor: "#ad172c",
											borderRadius: 500,
											margin: "1% 5%",
										}}
									></span>
								</a>
								<a href={`mailto: ${vendor.email}`}>
									<span
										className="fas fa-envelope text-white"
										style={{
											padding: "2.5%",
											backgroundColor: "#ad172c",
											borderRadius: 500,
											margin: "1% 5%",
										}}
									></span>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default RecommendedVendors;
