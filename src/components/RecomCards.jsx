import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import RecomCard from "./RecomCard";


const RecomCards = ({ id }) => {
  const queryid = id;
  const { user } = useAuth();
  const [recom, setRecom] = useState({});

  useEffect(() => {
    fetchRecomData();
  }, [queryid]);

  const fetchRecomData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-recommendations/${queryid}`
    );
    setRecom(data);
  };

  const handleDelete = (id) => {
    console.log(recom);
  };



  return (
    <div>
         <h2 className="text-lg font-semibold">Recommendations: {recom.length}</h2>
      {recom.length >0 ? (    

        recom.map(el => <RecomCard key={el._id} el={el} fetchRecomData={fetchRecomData} />)

      ) : (
        <h2>There is 0 recommendation for this query</h2>
      )}
    </div>
  );
};

export default RecomCards;
