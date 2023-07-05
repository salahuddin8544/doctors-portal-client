import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Care from "./Care/Care";
import InfoCards from "./InfoCard/InfoCards";

const Home = () => {
    return (
        <div className="mx-9">
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Care></Care>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;