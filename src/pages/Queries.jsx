import { useEffect, useState } from "react";
import axios from "axios";
import TabSection from "../components/TabSection";
import { Sidebar } from "../components/Sidebar";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState(""); 



  // Fetch queries from the server whenever search changes
  useEffect(() => {
    const fetAllQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-queries?search=${search}`
        );
        setQueries(data); // Update query list
      } catch (error) {
        console.error("Error fetching queries:", error); // Log errors
      }
    };

    fetAllQueries(); 
  }, [search]); 

  return (
    <div className="container mx-auto py-[40px]">
      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Tab */}
        <div className="col-span-1 md:col-span-3">
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search queries..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)} // Handle input changes
            />
          </Box>
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
