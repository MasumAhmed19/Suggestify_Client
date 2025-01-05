import { FaComments, FaEye, FaHandSparkles } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const QueryCard = ({ el }) => {
  const {
    queryer,
    productName,
    productBrand,
    productImage,
    queryTitle,
    problemFaced,
    addedTime,
  } = el || {};

  return (
    <section className="">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <div className="w-2/3 flex flex-col gap-3">

            <div className="flex gap-3 items-center">
              <img
                src={queryer?.photo}
                className="w-6 h-6 object-cover rounded-full"
                alt=""
              />
              <h2 className="text-sm text-gray-500">{queryer.name}</h2>
            </div>
            <h3 className="text-2xl font-semibold">{queryTitle}</h3>
            <p>{problemFaced.split(" ").slice(0, 15).join(" ") + "..."}</p>
          </div>

          <div className="w-1/3 flex justify-end">
            <img
              src={productImage}
              className="h-[140px] w-[200px] object-cover rounded-md"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <h2>{addedTime}</h2>
            <button className="flex items-center gap-2">
              <FaHandSparkles /> 1.1k
            </button>
            <button className="flex items-center gap-2">
              <FaComments /> 5
            </button>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2">
              <CiCirclePlus /> add recommendation
            </button>
            <button className="flex items-center gap-2">
              <FaEye /> Read Details
            </button>
          </div>
        </div>
      </div>

      <hr className="my-5" />
    </section>
  );
};

export default QueryCard;
