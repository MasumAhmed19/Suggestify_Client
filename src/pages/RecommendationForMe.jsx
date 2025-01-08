import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import RecomCard from "../components/RecomCard";

const RecommendationForMe = () => {
  const { user } = useAuth();
  const [recom, setRecom] = useState({});

  useEffect(() => {
    fetchRecomData();
  }, [user.email]);

  const fetchRecomData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recommendations-for-me/${user.email}`
    );
    setRecom(data);
  };

  console.log(recom);
  return (
    <div className="max-w-screen-xl mx-auto py-[40px]">
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Tab */}
        <div className="col-span-1 md:col-span-3">
          {recom.length > 0 ? (
            recom.map((el) => (
              <RecomCard
                key={el._id}
                el={el}
                fetchRecomData={fetchRecomData}
              />
            ))
          ) : (
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">You don't recommend anything to any query</h2>
                <img className="w-full md:w-1/2" src="https://i.ibb.co.com/qgXGHbS/theres-nothing-in-it.webp" alt="" />
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




