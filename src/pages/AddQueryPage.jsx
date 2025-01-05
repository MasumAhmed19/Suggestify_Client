import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AddQueryPage = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    const queryTitle = form.queryTitle.value;
    const problemFaced = form.problemFaced.value;
    const queryCategory = form.queryCategory.value;
    const recommendationCount=0;

    const queryData = {
        productName,
        productBrand,
        productImage,
        queryTitle,
        problemFaced,
        recommendationCount,
        queryCategory,
    }

    // Add API call or database integration here
  };

  return (
    <div className="min-h-screen flex flex-col items-center g4 p-4">
      {/* Query Form Container */}
      <div className="container bg-white rounded-md  p-10 mt-10">
        <h4 className="text-center text-xl font-semibold mb-2">
          Submit Your Query
        </h4>
        <h5 className="text-center text-[#8b8c8f] mb-6">
          Need help? Fill out the form below.
        </h5>

        {/* Query Form */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* left */}
            <div className="w-full flex flex-col gap-5">
              <div className="form-control">
                <input
                  type="text"
                  placeholder={`${user.email}`}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  disabled
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  name="productBrand"
                  placeholder="Product Brand"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  name="productImage"
                  placeholder="Product Image URL"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
            </div>

            {/* Right */}
            <div className="w-full flex flex-col gap-5">
              <div className="form-control">
                <input
                  type="text"
                  name="queryTitle"
                  placeholder="Query Title"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="form-control">
                <select
                  name="queryCategory"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                >
                  <option value="Select-Category selected disabled">
                    Select Category
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Home Appliance">Home Appliance</option>
                  <option value="Personal Care">Personal Care</option>
                </select>
              </div>
              <div className="form-control">
                <textarea
                  name="problemFaced"
                  placeholder="Please describe what problem you are facing?"
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
              Submit Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueryPage;
