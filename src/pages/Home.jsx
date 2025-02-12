import Carousel from '../components/Carousel';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Queries from './Queries';
import StaticQueries from '../components/StaticQueries';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Herov2 from './HomePage/Herov2';




const Home = () => {
    return (
        <div>
            {/* Hero slider */}
            {/* <Carousel /> */}
            <Herov2 />

            {/* category wise querys  */}
            {/* <Queries /> */}
            <StaticQueries />

            {/* <LoadingSkeleton /> */}
       

        </div>
    );
};

export default Home;