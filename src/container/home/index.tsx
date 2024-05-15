import Hero from "./Hero";
import AboutUs from "./AboutUs";
import OurProcess from "./OurProcess";
import Slider from "./Slider";
import PageBreak from "@/components/page-break";
import ParallaxView from "./ParallaxView";
import ContactUs from "./ContactUs";

const Home = () => {
	return (
		<>
			<Hero />
			<AboutUs />
			<PageBreak />
			<OurProcess />
			<Slider />
			<PageBreak />
			<ParallaxView />
			<PageBreak />
			<ContactUs />
		</>
	);
};

export default Home;
