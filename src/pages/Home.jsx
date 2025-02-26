import Carousel from '../components/Carousel';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Queries from './Queries';
import StaticQueries from '../components/StaticQueries';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Herov2 from './HomePage/Herov2';
import TrustedPartners from './sections/TrustedPartners';
import Testimonials from './sections/Testimonials';
import FAQSection from './HomePage/FAQSection';
import CatCard from './HomePage/CatCard';




const Home = () => {
    return (
        <div>
            {/* Hero slider */}
            {/* <Carousel /> */}
            <Herov2 />
            {/*  */}
            <TrustedPartners />

            {/* category wise querys  */}
            {/* <Queries /> */}
            {/* <StaticQueries /> */}
            <CatCard />

            {/* <LoadingSkeleton /> */}
            <FAQSection />
       
            {/* Testimonials */}
            <Testimonials />

        </div>
    );
};

export default Home;