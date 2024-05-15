import Hero from "@/components/hero";
import ReachoutForm from "./ReachoutForm";
import PageBreak from "@/components/page-break";
import TalentedIndividualForm from "./TalentedIndividualForm";
import ContactInfo from "./ContactInfo";
import Map from "./Map";

const ContactUs = () => {
	return (
		<>
			<Hero title="Contact Us" />
			<ReachoutForm />
			<PageBreak />
			<TalentedIndividualForm />
			<PageBreak />
			<ContactInfo />
			<Map />
		</>
	);
};

export default ContactUs;
