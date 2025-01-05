import { useEffect, useState } from "react";
import axios from "axios";

const Queries = () => {
    const [queries, setQueries] = useState([]);
    
    useEffect(()=>{
        fetAllQueries();
    }, [])

    const fetAllQueries = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/queries`)
        setQueries(data)
    }

    console.log(queries)
    return (
        <div>
            <h2>Queries: {queries.length}</h2>
        </div>
    );
};

export default Queries;