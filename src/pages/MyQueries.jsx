import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from 'axios'
import { Sidebar } from "../components/Sidebar";
import QueryCard from '../components/QueryCard';



const MyQueries = () => {
  const { user } = useAuth();
  const [query, setQuery] = useState()
  const { email } = useParams();

  useEffect(() => {
    fetchQueryData();
  }, [email]);

  const fetchQueryData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/queries/${email}`
    );
    setQuery(data);
  };


  return (
    <div className='max-w-screen-xl mx-auto py-[40px]'>
            
            <div className='grid md:grid-cols-4 grid-cols-1'>

                <div className='col-span-1 md:col-span-3'>
                    <div className='flex flex-col gap-8'>
                        {query && query.map(el=>(
                            <QueryCard key={el?._id} el={el} fetchQueryData={fetchQueryData} />
                        ))}

                    </div>

                </div>

                {/* Sidebar */}
                <div className='col-span-1 '>
                    <Sidebar />
                </div>

            </div>


        </div>
  );
};

export default MyQueries;
