import { useEffect, useState } from "react";
import axios from "axios";
import TabSection from "../components/TabSection";
import { Sidebar } from '../components/Sidebar';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    
    useEffect(()=>{
        fetAllQueries();
    }, [])

    const fetAllQueries = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/queries`)
        setQueries(data)
    }

    console.log(queries)
    return (
        <div className='max-w-screen-xl mx-auto py-[40px]'>

            <div className='grid md:grid-cols-4 grid-cols-1'>

                {/* Tab */}
                <div className='md:col-span-3'>
                    <TabSection queries={queries} />
                </div>

                {/* Sidebar */}
                <div className='col-span-1 sticky top-0'>
                    <Sidebar />
                </div>

            </div>


        </div>
    );
};

export default Queries;