import { FaComments, FaEye, FaHandSparkles } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const QueryCard = ({ el }) => {
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

  return (
    <section className="p-4 bg-white rounded-md">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section: Queryer Info & Title */}
        <div className="flex flex-col gap-3 w-full md:w-2/3">
          <div className="flex gap-3 items-center">
            <img
              src={queryer?.photo}
              className="w-8 h-8 object-cover rounded-full"
              alt=""
            />
            <h2 className="text-sm text-gray-500">{queryer.name}</h2>
          </div>
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

      {/* Footer: Time, Comments, Likes, and Buttons */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mt-4">
        <div className="flex md:gap-3 items-center gap-10 text-sm text-gray-500">
          <h2>{addedTime}</h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <FaHandSparkles /> 1.1k
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <FaComments /> 5
          </button>
        </div>

        <div className="flex  gap-3 items-center">
          <button className="flex items-center gap-2 text-sm text-[#7201FF]">
            <CiCirclePlus className="text-lg" /> Add Recommendation
          </button>
          <Link to={`/queries/${_id}`} className="flex items-center gap-2 text-sm  text-[#7201FF]">
            <FaEye className="text-lg" /> Read Details
          </Link>
        </div>
      </div>

      <hr className="my-5" />
    </section>
  );
};

export default QueryCard;
