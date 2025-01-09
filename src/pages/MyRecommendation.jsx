import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import RecomCard from "../components/RecomCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyRecommendation = () => {
  const axiosSecure = useAxiosSecure()

  const { user } = useAuth();
  const [recom, setRecom] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecomData = async () => {
    setLoading(true); // Start loading
    try {
      const { data } = await axiosSecure.get(
        `/my-recoms/${user.email}`
      );
      setRecom(data); 
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false); 
    }
  };

  // Use useEffect to fetch data initially
  useEffect(() => {
    fetchRecomData();
  }, [user.email]); 

  // console.log(recom);

  return (
    <div className="max-w-screen-xl mx-auto py-[40px]">
      <div className="grid md:grid-cols-4 grid-cols-1 p-6">
        {/* Tab */}
        <div className="col-span-1 md:col-span-3">
        <h2 className="text-lg font-semibold mb-2">My Recommendations</h2>
        <hr className=""/>
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
                You don't recommend anything to any query
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

export default MyRecommendation;
