import Hero from "@/components/hero";
import DepartmentOfBuildings from "./DeparmentOfBuildings";
import PageBreak from "@/components/page-break";
import RecommendedVendors from "./RecommendedVendors";

const Services = () => {
	return (
		<>
			<Hero title="Services" />
			<DepartmentOfBuildings />
			<PageBreak />
      <RecommendedVendors />
		</>
	);
};

export default Services;
