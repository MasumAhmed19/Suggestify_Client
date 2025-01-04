import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            {/* Header */}
            <Header /> 

            {/* Outlet */}
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer />
            
        </div>
    );
};

export default Main;