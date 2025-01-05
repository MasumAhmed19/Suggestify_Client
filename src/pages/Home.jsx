import Carousel from '../components/Carousel';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Home = () => {
    return (
        <div>
            {/* Hero slider */}
            <Carousel />

            {/* Follow us on social */}
            <>
            <section className='container mx-auto bg-[#F2F2F2] py-16'>
                <div className='flex flex-col gap-5 items-center'>
                    <h2 className='text-center text-xl'>Follow us on</h2>
                    <div className='flex gap-4 text-2xl'>
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaLinkedin />
                    </div>
                </div>
            </section>
            </>

            {/* category wise querys  */}
            

        </div>
    );
};

export default Home;