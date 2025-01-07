import RecomCard from "./RecomCard";


const RecomCards = ({ fetchRecomData, recom }) => {

  const handleDelete = (id) => {
    console.log(recom);
  };


  return (
    <div>
         <h2 className="text-lg font-semibold">Recommendations: {recom.length}</h2>
      {recom.length >0 ? (    

        recom.map(el => <RecomCard key={el._id} el={el} fetchRecomData={fetchRecomData} />)

      ) : (
        <h2>Submit your recommendation by filling the form</h2>
      )}
    </div>
  );
};

export default RecomCards;
