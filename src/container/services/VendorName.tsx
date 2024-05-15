"use client";

type VendorData = {
	id: number;
	name: string;
	link: string;
	description: string;
	phone: string;
	email: string;
	tagId: string;
};

const VendorName: React.FC<{ className: string; vendor: VendorData }> = ({
	className,
	vendor,
}) => {
	const openInNewTab = (url: string) => {
		if (typeof window === "undefined") return;

		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className={className}
			id={vendor.tagId}
			onClick={() => {
				openInNewTab(vendor.link);
			}}
		>
			<h1>{vendor.name}</h1>
		</div>
	);
};

export default VendorName;
