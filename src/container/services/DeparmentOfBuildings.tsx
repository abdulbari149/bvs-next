"use client";
import { v4 } from "uuid";

import { useState } from "react";

const agencies = [
	{
		id: v4(),
		abbreviation: "DOB",
		name: "Department of Buildings",
		itemContainerTagId: "dob",
		items: [
			{ id: v4(), name: "Certificate of Occupancy Procurement", tagId: "dob1" },
			{
				id: v4(),
				name: "Place of Assembly Certificate of Operation (PACO) and Permit",
				tagId: "dob2",
			},
			{
				id: v4(),
				name: "Alteration DOB NOW filings, DOB Now Build Filings, DOB Now Inspections",
			},
			{ id: v4(), name: "Signage Legalization" },
			{ id: v4(), name: "Construction Permitting and Sign-Offs" },
			{ id: v4(), name: "Equipment Use Permit" },
			{ id: v4(), name: "Boiler and Elevator Compliance and Registration" },
			{ id: v4(), name: "Electrical Inspections" },
			{
				id: v4(),
				name: "After Hours Variance Permits, Assist Contractor with After Hours Variances",
			},
			{
				id: v4(),
				name: "Reinstatement of Application/Supersede of Application",
			},
			{ id: v4(), name: "Reissuance of Building Department Folder" },
			{ id: v4(), name: "PAA/ Withdrawal, Reinstatement and Supersede" },
		],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit eleifend enim. Cras eleifend lorem sit amet odio consectetur tempus. Mauris et metus id turpis varius luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: v4(),
		abbreviation: "FDNY",
		name: "New York City Fire Department",
		itemContainerTagId: "fdny",
		items: [
			{
				id: v4(),
				name: "Place of Assembly Permit",
			},
			{
				id: v4(),
				name: "Fire Alarms",
			},
			{
				id: v4(),
				name: "Fire Protection Plans",
			},
			{
				id: v4(),
				name: "Sprinkler/Standpipe Systems",
			},
			{
				id: v4(),
				name: "Boilers",
			},
			{
				id: v4(),
				name: "Fire Suppression Systems",
			},
			{
				id: v4(),
				name: "Generator/Fuel Storage",
			},
			{
				id: v4(),
				name: "Resolve Violation Orders and Summons",
			},
			{
				id: v4(),
				name: "Attend/ Reschedule Hearings",
			},
			{
				id: v4(),
				name: "Reopen Default Judgements",
			},
			{
				id: v4(),
				name: "Certificates of Fitness",
			},
		],
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit eleifend enim. Cras eleifend lorem sit amet odio consectetur tempus. Mauris et metus id turpis varius luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: v4(),
		abbreviation: "LPC",
		name: "Landmarks Preservation Commission",
		itemContainerTagId: "lpc",
		items: [
			{
				id: v4(),
				name: "Certificate of No Effect (CNE) Including Expedited and FastTrack Applications",
			},
			{
				id: v4(),
				name: "Permit for Minor Work",
			},
			{
				id: v4(),
				name: "Certificate of Appropriateness",
			},
			{
				id: v4(),
				name: "Request for Evaluation",
			},
			{
				id: v4(),
				name: "Landmark Status Letter",
			},
			{
				id: v4(),
				name: "Records Requests",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "HPD",
		name: "Department of Housing Preservation",
		itemContainerTagId: "hpd",
		items: [
			{
				id: v4(),
				name: "Property Registration Assistance",
			},
			{
				id: v4(),
				name: "Violation Issuance Request",
			},
			{
				id: v4(),
				name: "Certification of Correction of Violations",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "DOT",
		name: "Department of Transportation",
		itemContainerTagId: "dot",
		items: [
			{
				id: v4(),
				name: "Application for Roadway/Sidewalk Permit",
			},
			{
				id: v4(),
				name: "Sidewalk Violation Copy",
			},
			{
				id: v4(),
				name: "Sidewalk Inspection Requests",
			},
			{
				id: v4(),
				name: "Permit for Record Purposes",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "DEC",
		name: "Department of Environmental Control",
		itemContainerTagId: "dec",
		items: [
			{
				id: v4(),
				name: "Backflow Prevention Devices",
			},
			{
				id: v4(),
				name: "Construction Noise Mitigation Plan",
			},
			{
				id: v4(),
				name: "Asbestos Assessment Report",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "DCP",
		name: "Department of City Planning",
		itemContainerTagId: "dcp",
		items: [
			{
				id: v4(),
				name: "Zoning Verification Letter",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "PDST",
		name: "Parks Department and Street Trees",
		itemContainerTagId: "pdst",
		items: [
			{
				id: v4(),
				name: "Obtain Acknowledgement Letter",
			},
			{
				id: v4(),
				name: "Obtain Street Trees Site Plan Approval",
			},
			{
				id: v4(),
				name: "Obtain Street Trees Site Sign-Off",
			},
			{
				id: v4(),
				name: "DEP Sewer/Site Connection",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "MTA",
		name: "Metropolitan Transportation Authority",
		itemContainerTagId: "mta",
		items: [
			{
				id: v4(),
				name: "MTA/Transit Authority Approval (Department of Capital Program Management: Outside Projects)",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "DCA",
		name: "Department of Consumer Affairs",
		itemContainerTagId: "dca",
		items: [
			{
				id: v4(),
				name: "Sidewalk Cafe License",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "OATH",
		name: "Office of Administrative Trials and Hearings",
		itemContainerTagId: "oath",
		items: [
			{
				id: v4(),
				name: "Resolve Violation(s)",
			},
			{
				id: v4(),
				name: "Representation for OATH Hearings",
			},
			{
				id: v4(),
				name: "Reschedule Hearings",
			},
			{
				id: v4(),
				name: "Reopen Default Judgements",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "ECB",
		name: "Environmental Control Board",
		itemContainerTagId: "ecb",
		items: [
			{
				id: v4(),
				name: "Compliance and Registration Complaints and Violations",
			},
			{
				id: v4(),
				name: "Certificates of Correction",
			},
			{
				id: v4(),
				name: "Dismissal of Full/Partial Vacate or Full/Partial Stop Work Orders",
			},
		],
	},
	{
		id: v4(),
		abbreviation: "TOPO",
		name: "Topographical Bureau",
		itemContainerTagId: "topo",
		items: [
			{
				id: v4(),
				name: "Application for Address",
			},
			{
				id: v4(),
				name: "Address Verification (TOPO Stamp)",
			},
		],
	},
];

const DepartmentOfBuildings = () => {
	const [activeAgencyIndex, setActiveAgencyIndex] = useState(0);

	const activeAgency = agencies[activeAgencyIndex];

	return (
		<div className="responsive-two-column-grid" style={{ marginTop: "5%" }}>
			<div style={{ padding: "5% 0 5% 0" }}>
				<div style={{ width: "100%" }}>
					<ul className="agency-selector">
						{agencies.map((agency, index) => (
							<li
								key={agency.id}
								onClick={() => {
									setActiveAgencyIndex(index);
								}}
							>
								<a
									className={`item ${
										activeAgency.abbreviation === agency.abbreviation
											? "active-service"
											: ""
									}`}
									href={`#${agency.abbreviation}`}
								>
									{agency.abbreviation}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div style={{ padding: "5% 20% 5% 0" }}>
				<div className="lcs-inside" style={{ width: "100%", padding: "3%" }}>
					<h1 id="title-text" className="hover-text">
						{activeAgency.name}
					</h1>

					<div id={activeAgency.itemContainerTagId}>
						<ul
							id={`${activeAgency.itemContainerTagId}-list`}
							className="shown-services"
						>
							{activeAgency.items.map((item) => (
								<li
									key={item.id}
									id={"tagId" in item ? item?.tagId : undefined}
									className="item-left"
								>
									{item.name}
								</li>
							))}
						</ul>
						<p
							id={`${activeAgency.itemContainerTagId}-description`}
							className="description"
						>
							{activeAgency.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DepartmentOfBuildings;
