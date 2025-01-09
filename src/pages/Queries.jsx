import { useEffect, useState } from "react";
import axios from "axios";
import TabSection from "../components/TabSection";
import { Sidebar } from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiTextColumns } from "react-icons/pi";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetAllQueries = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/all-queries?search=${search}&sort=${sort}`
        );
        setQueries(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetAllQueries();
  }, [search, sort]);

  const [layout, setLayout] = useState("optionOne");

  const handleLayout = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div className="container mx-auto py-[40px]">
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Tab */}
        <div className="col-span-1 md:col-span-3">
          {/* search and sort */}
          <div className="flex flex-col px-5 md:flex-row items-center justify-between gap-5">
            {/* Search input */}
            <div className="w-full md:w-2/3 lg:w-5/6 mb-2">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Search queries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Sort order dropdown */}
            <div className="w-full md:w-1/3 lg:w-1/6 mb-2">
              <select
                className="select select-bordered w-full"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Sort By Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            {/* Layout Radio Buttons */}
            <div className="join mb-2">
              <label
                className={`join-item btn flex items-center gap-2 ${
                  layout === "optionOne" ? "btn-active1" : ""
                }`}
              >
                <input
                  type="radio"
                  name="layout" 
                  className="sr-only"
                  value="optionOne" 
                  checked={layout === "optionOne"} 
                  onChange={handleLayout} 
                />
                <GiHamburgerMenu className="text-xl" />
              </label>

              {/* Radio Button 2 */}
              <label
                className={`join-item btn flex items-center gap-2 ${
                  layout === "optionTwo" ? "btn-active1" : ""
                }`}
              >
                <input
                  type="radio"
                  name="layout" // Same name for mutual exclusivity
                  className="sr-only"
                  value="optionTwo" // Use value to identify the option
                  checked={layout === "optionTwo"} // Checked state based on layout
                  onChange={handleLayout} // Update the layout state
                  aria-label="Coffee icon option"
                />
                <PiTextColumns className="text-2xl" />
              </label>
            </div>
          </div>

          {/* Tab Section */}
          <TabSection layout={layout} loading={loading} queries={queries} />
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Queries;
