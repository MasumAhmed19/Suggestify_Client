import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import { FaComments, FaHandSparkles } from "react-icons/fa";
import RecommendationForm from "../components/RecommendationForm";
import RecomCards from "../components/RecomCards";

const QueryDetailPage = () => {
  const { user } = useAuth();
  const [query, setQuery] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchQueryData();
  }, [id]);

  const fetchQueryData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/query/${id}`
    );
    setQuery(data);
  };

  console.log(query);
  const {
    _id,
    queryer,
    productName,
    productBrand,
    productImage,
    queryTitle,
    problemFaced,
    queryCategory,
    addedTime,
  } = query[0] || {};

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-[40px]">
        <div className="grid md:grid-cols-4 grid-cols-1">
          {/* Tab */}
          <div className="col-span-1 md:col-span-3 space-y-5">
            <h2 className="text-3xl font-semibold">{queryTitle}</h2>
           
            <div className="flex gap-3 items-center">
                <div>
                    <img src={queryer?.photo} alt=""  className="w-10 h-10 object-cover rounded-full" />
                </div>

                <div className="flex flex-col">
                    <h4>{queryer?.name} . <span className="text-[#7201FF]">Follow</span></h4>
                    <h4>7 min read . <span>{addedTime}</span></h4>
                </div>
            </div>
            
            <hr />
            <div className="flex md:gap-3 items-center gap-10  text-gray-500 text-base">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                        <FaHandSparkles /> 1.1k
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                        <FaComments /> 5
                    </button>
            </div>
            <hr />

            <div className="py-5">
                <img src={productImage} className="h-[40vh] w-full object-cover rounded-md" alt="" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="taglink">Category: {queryCategory}</h2>
                <h2 className="taglink">Product Name: {productName}</h2>
                <h2 className="taglink">Brand: {productBrand}</h2>
            </div>

            <div className="space-y-3">
                <h2 className="text-3xl font-semibold">What Problem I am facing?</h2>
                <p>{problemFaced}</p>
            </div>
            <hr />

            <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-lg font-semibold">Do you have any solutions?</h2>
                  <p className="">Please recommend something that can solve the addressed issue by filling up the form.</p>
                </div>
                {/* form for recommendations */}
                <div>
                  {
                    user ? <RecommendationForm query={query}/>  : (<Link to='/login' className="btn1">Write your recommendation</Link>)
                  }
                </div>

                {/* all recommendations for this post */}
                <div>
                  <RecomCards id={id} />

                </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="col-span-1 ">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetailPage;
