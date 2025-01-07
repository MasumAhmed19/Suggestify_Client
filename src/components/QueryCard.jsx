import { FaComments, FaEye, FaHandSparkles, FaSave  } from "react-icons/fa";
import { LuCirclePlus } from "react-icons/lu";
import { AiFillDelete } from "react-icons/ai";

import { FaGear } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const QueryCard = ({ el, fetchQueryData, fetAllQueries }) => {
  const {user} = useAuth();
  const navigate = useNavigate()


  const {
    _id,
    queryer,
    productName,
    productBrand,
    productImage,
    queryTitle,
    problemFaced,
    addedTime,
  } = el || {};

  let parbe;
  if(queryer?.email===user?.email){
    parbe=true;
  }else{
    parbe=false;

  }

  const handleDelete = async (id)=>{
    if(parbe){
      try{
        const res = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`);
        if(res.status === 200){
          toast.success('Data Successfully Deleted')
          fetchQueryData();
          fetAllQueries();
        }else{
          toast.error('Failed to Delete')
        }
        
      }catch(err){
        console.log(err)
      }
    }else{
      toast.error('You cannot delete others query')  
    }
  }
  
  
  const handleUpdate = async (id)=>{
    if(!parbe){
      toast.error('You cannot update others query')  
    }else{
      navigate(`/update/${id}`)
    }
  }

  return (
    <section className="p-4 bg-white rounded-md space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={queryer?.photo}
            className="w-8 h-8 object-cover rounded-full"
            alt=""
          />
          <div>
            <h2 className="text-sm text-gray-800">{queryer.name}</h2>
          </div>
        </div>
        <div className={`dropdown dropdown-end cursor-pointer`}>
          <div
            tabIndex={0}
            role=""
            className="m-1"
          >
            <HiDotsHorizontal />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow space-y-2"
          >
            <li >
              <Link onClick={()=>handleUpdate(_id)} className={`${parbe ? 'hover:text-[#7201FF]': 'text-gray-400 cursor-not-allowed'} flex gap-2 items-center text-md `}>
                <FaGear /> Update your query
              </Link>
            </li>

            <li className="">
              <Link onClick={()=>handleDelete(_id)} className={`${parbe? 'hover:text-[#7201FF]': 'text-gray-400 cursor-not-allowed'} flex gap-2 items-center text-md`}>
                <AiFillDelete /> Delete your query
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center text-md hover:text-[#7201FF]">
                <FaSave />Save this query
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-3 w-full md:w-2/3">
          <h3 className="text-2xl font-semibold">{queryTitle}</h3>
          <p className="text-gray-600">
            {problemFaced.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
        </div>

        {/* Right Section: Product Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src={productImage}
            className="h-[140px] w-full md:w-[200px] object-cover rounded-md"
            alt=""
          />
        </div>
      </div>

      {/* date like comment */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mt-4">
        <div className="flex md:gap-3 items-center gap-10 text-sm text-gray-500">
          <h2>{addedTime}</h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <FaHandSparkles /> 1.1k
          </button>
          <Link
            to={`/query/${_id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <FaComments /> 5
          </Link>
        </div>

        <div className="flex  gap-3 items-center">
          <Link
            to='/'
            className="flex items-center gap-2 text-sm text-[#7201FF] tooltip"
            data-tip="Add Recommendation"
          >
            <LuCirclePlus className="text-lg" /> Add Recommendation
          </Link>
          <Link
            to={`/query/${_id}`}
            className="flex items-center gap-2 text-sm  text-[#7201FF] tooltip"
            data-tip="Read Details"
          >
            <FaEye className="text-lg" />
            Read Detail
          </Link>
        </div>
      </div>

      <hr className="my-5" />
    </section>
  );
};

export default QueryCard;
