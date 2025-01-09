import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import RecomCard from "../components/RecomCard";
import LoadingSkeleton from "../components/LoadingSkeleton";

const RecommendationForMe = () => {
  const { user } = useAuth();
  const [recom, setRecom] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchRecomData = async () => { 
    try{
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recommendations-for-me/${user.email}`
      );
      setRecom(data);
    }catch  (err){
      console.log(err)

    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRecomData();
  }, [user.email]);

  // console.log(recom);
  return (
    <div className="max-w-screen-xl mx-auto py-[40px]">
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Tab */}

        <div className="col-span-1 md:col-span-3 p-6" >
          <div className="">
              <h2 className="text-lg font-semibold mb-2">Recommendations for me</h2>
               <hr className="mb-2"/>
            </div>
          {loading ? ( // Show loading state
            <LoadingSkeleton />
          ) : recom.length > 0 ? (
            recom.map((el) => (
              <RecomCard
                key={el._id}
                el={el}
                fetchRecomData={fetchRecomData} 
              />
            ))
          ) : (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">
                No one recommended anything to to your any  query!
              </h2>
              <img
                className="w-full md:w-1/2"
                src="https://i.ibb.co.com/qgXGHbS/theres-nothing-in-it.webp"
                alt="No recommendations"
              />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-1 ">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default RecommendationForMe;




