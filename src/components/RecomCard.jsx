import { BiSolidLike } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RecomCard = ({ el, handleRecomDelete }) => {

    const { user } = useAuth();
    
    let parbe = true;

    if (user?.email === el?.recommer?.email) {
      parbe = true;
    } else {
      parbe = false;
    }
  

  return (
    <div className="pt-5">
      <div className="flex flex-col gap-3">
        {/* Recomer info */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              referrerPolicy="no-referrer"
              src={el?.recommer?.photo}
              className="w-8 h-8 object-cover rounded-full"
              alt=""
            />
            <div>
              <h2 className="text-sm text-gray-800">
                {el?.recommer?.name}
              </h2>
            </div>
          </div>
          {/* three dot */}
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
              <li>
                <Link
                  onClick={() => handleRecomDelete(el?._id)}
                  className={`${
                    parbe
                      ? "hover:text-[#7201FF]"
                      : "text-gray-400 cursor-not-allowed"
                  } flex gap-2 items-center text-md `}
                >
                  <FaGear /> Delete recommendation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* data */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Section */}
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <h3 className="text-2xl font-semibold">
              {el?.recommendationTitle}
            </h3>
            <p className="text-gray-600">{el?.recommendationDetail}</p>
            <div className="flex gap-3">
              <h4 className="flex gap-2 items-center">
                <BiSolidLike />
                53
              </h4>
              <h4 className="flex gap-2 items-center">
                <FaComments /> 4 replies
              </h4>
            </div>
          </div>

          {/* Right Section: Product Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src={el?.recommendationImage}
              className="h-[140px] w-full md:w-[200px] object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="mt-8"/>
    </div>
  );
};

export default RecomCard;
