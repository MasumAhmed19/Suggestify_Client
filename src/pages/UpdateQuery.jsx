import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from 'axios';
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const UpdateQuery = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [queries, setQueries] = useState([]);
  const [date, setDate] = useState(format(new Date(), 'P'));

  // State for form data
  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
    productImage: "",
    queryTitle: "",
    problemFaced: "",
    queryCategory: ""
  });

  useEffect(() => {
    fetchAllQueries();
  }, [id]);

  const fetchAllQueries = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/query/${id}`);
    setQueries(data);

    // Set initial form values from fetched data
    setFormData({
      productName: data[0]?.productName || "",
      productBrand: data[0]?.productBrand || "",
      productImage: data[0]?.productImage || "",
      queryTitle: data[0]?.queryTitle || "",
      problemFaced: data[0]?.problemFaced || "",
      queryCategory: data[0]?.queryCategory || ""
    });
  };

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryData = {
      queryer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL
      },
      ...formData,
      recommendationCount: 0,
      addedTime: date
    };

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/update-query/${id}`, queryData);
      toast.success('Query Updated Successfully!!!');
      navigate(`/my-queries`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-[70px] flex flex-col items-center g4 ">
      {/* Query Form Container */}
      <div className="container bg-white rounded-md p-10 mt-10">
        <h4 className="text-center text-xl font-semibold mb-2">
          Update Your Query
        </h4>
        <h5 className="text-center text-[#8b8c8f] mb-6">
          If you want to update any data, please fill the form
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
                  placeholder={`${user?.email}`}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  disabled
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={formData.productName}
                  onChange={handleChange}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="productBrand"
                  placeholder="Product Brand"
                  value={formData.productBrand}
                  onChange={handleChange}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="productImage"
                  placeholder="Product Image URL"
                  value={formData.productImage}
                  onChange={handleChange}
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
                  value={formData.queryTitle}
                  onChange={handleChange}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="form-control">
                <select
                  name="queryCategory"
                  value={formData.queryCategory}
                  onChange={handleChange}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Home Appliance">Home Appliance</option>
                  <option value="Personal Care">Personal Care</option>
                </select>
              </div>
              <div className="form-control">
                <textarea
                  name="problemFaced"
                  placeholder="Please describe what problem you are facing?"
                  value={formData.problemFaced}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
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

export default UpdateQuery;
