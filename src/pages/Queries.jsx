import { useEffect, useState } from "react";
import axios from "axios";
import TabSection from "../components/TabSection";
import { Sidebar } from "../components/Sidebar";


const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetAllQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-queries?search=${search}&sort=${sort}`
        );
        setQueries(data); 
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    console.log(sort);

    fetAllQueries();
  }, [search, sort]);

  return (
    <div className="container mx-auto py-[40px]">
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Tab */}
        <div className="col-span-1 md:col-span-3">
          {/* search and sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Search input */}
            <div className="w-full md:w-5/6 mb-2">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Search queries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Sort order dropdown */}
            <div className="w-full md:w-1/6 mb-2">
              <select
                className="select select-bordered w-full"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option
                  value=""
                >
                  Sort By Default
                </option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <TabSection queries={queries} />
        </div>

        {/* Sidebar */}
        <div className="col-span-1 ">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Queries;
