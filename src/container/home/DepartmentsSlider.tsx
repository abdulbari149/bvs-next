import Link from "next/link";
import { v4 } from "uuid";

const departments = [
	{
		id: v4(),
		name: "DOB",
		link: "https://www1.nyc.gov/site/buildings/index.page",
	},
	{
		id: v4(),
		name: "FDNY",
		link: "https://www1.nyc.gov/site/fdny/index.page",
	},
	{
		id: v4(),
		name: "LPC",
		link: "https://www1.nyc.gov/site/lpc/index.page",
	},
	{
		id: v4(),
		name: "HPD",
		link: "https://www1.nyc.gov/site/hpd/index.page",
	},
	{
		id: v4(),
		name: "DOT",
		link: "https://www1.nyc.gov/site/dot/index.page",
	},
	{
		id: v4(),
		name: "DEC",
		link: "https://www.dec.ny.gov/",
	},
	{
		id: v4(),
		name: "DCP",
		link: "https://www1.nyc.gov/site/planning/index.page",
	},
	{
		id: v4(),
		name: "PDST",
		link: "https://www1.nyc.gov/site/dcas/index.page",
	},
	{
		id: v4(),
		name: "MTA",
		link: "https://new.mta.info/",
	},
	{
		id: v4(),
		name: "DCA",
		link: "https://www1.nyc.gov/site/dca/index.page",
	},
	{
		id: v4(),
		name: "OATH",
		link: "https://www1.nyc.gov/site/oath/index.page",
	},
	{
		id: v4(),
		name: "ECB",
		link: "https://www1.nyc.gov/site/oath/index.page",
	},
	{
		id: v4(),
		name: "TOPO",
		link: "https://www1.nyc.gov/site/oath/index.page",
	},
	{
		id: v4(),
		name: "DOB",
		link: "https://www1.nyc.gov/site/buildings/index.page",
	},
	{
		id: v4(),
		name: "FDNY",
		link: "https://www1.nyc.gov/site/fdny/index.page",
	},
	{
		id: v4(),
		name: "LPC",
		link: "https://www1.nyc.gov/site/lpc/index.page",
	},
	{
		id: v4(),
		name: "HPD",
		link: "https://www1.nyc.gov/site/hpd/index.page",
	},
	{
		id: v4(),
		name: "DOT",
		link: "https://www1.nyc.gov/site/dot/index.page",
	},
	{
		id: v4(),
		name: "DEC",
		link: "https://www.dec.ny.gov/",
	},
	{
		id: v4(),
		name: "DCP",
		link: "https://www1.nyc.gov/site/planning/index.page",
	},
	{
		id: v4(),
		name: "PDST",
		link: "https://www1.nyc.gov/site/dcas/index.page",
	},
	{
		id: v4(),
		name: "MTA",
		link: "https://new.mta.info/",
	},
	{
		id: v4(),
		name: "DCA",
		link: "https://www1.nyc.gov/site/dca/index.page",
	},
	{
		id: v4(),
		name: "OATH",
		link: "https://www1.nyc.gov/site/oath/index.page",
	},
	{
		id: v4(),
		name: "ECB",
		link: "https://www1.nyc.gov/site/oath/index.page",
	},
	{
		id: v4(),
		name: "TOPO",
		link: "https://www1.nyc.gov/site/oath/index.page",
	},
];

const DepartmentsSlider = () => {
	return (
		<div className="marquee" style={{ marginTop: "4vh" }}>
			<div className="marquee__group">
				{[...departments, ...departments.slice(0, 4)].map((department) => (
					<Link
						href={department.link}
						target="_blank"
						style={{ color: "white", textDecoration: "none" }}
						key={department.id}
					>
						<h2>{department.name}</h2>
					</Link>
				))}
			</div>
		</div>
	);
};

export default DepartmentsSlider;
