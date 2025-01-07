import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { format } from 'date-fns'
import axios from "axios";
import toast from "react-hot-toast";


const RecommendationForm = ({ query, fetchRecomData }) => {
const {user} = useAuth()
const [date, setDate] = useState(format(new Date(), 'P'))

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

  console.log(query[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const recommendationTitle = form.recommendationTitle.value;
    const recommendationImage = form.recommendationImage.value;
    const recommendationDetail = form.recommendationDetail.value;
    const recommendationCount = 0;

    const recomData = {
      recommer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      querierID:_id,
      queryer,
      recommendationTitle,
      recommendationImage,
      recommendationDetail,
      addedRecomTime: date,
      recomLike:0
    };

    console.log(recomData)

    // Add API call or database integration here
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-recommendation`, recomData)
      fetchRecomData();
      form.reset();
      console.log(data);
      toast.success('Successfully added your recommendation')
      
    }catch(err){
      console.log(err)
    }

  };

  return (
    <div>
      {/* Query Form */}
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-8">

          <div className="w-full flex flex-col gap-5">
            <div className="form-control">
              <input
                type="text"
                name="recommendationTitle"
                placeholder="Recommendation Title (Ex. Smartphone Z - Long-Lasting Battery )"
                className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="recommendationImage"
                placeholder="Recommendation Product Image (Direct Link)"
                className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="recommendationDetail"
                placeholder="Why this product is better?"
                rows="4"
                className=" w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn1 py-2 bg-indigo-500 text-white rounded-md"
          >
            Submit Your Recommendation
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecommendationForm;
