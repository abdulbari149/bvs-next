import PageBreak from "@/components/page-break";
import Hero from "@/components/hero";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import OurTeam from "./OurTeam";

const About = () => {
	return (
		<>
			<Hero title="About Us" />
			<WhoWeAre />
			<PageBreak />
			<WhatWeDo />
			<OurTeam />
		</>
	);
};

export default About;
