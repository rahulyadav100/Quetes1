import React, { useEffect, useState } from "react";
import "../Components/D.css";
import axios from "axios";
import Quetes from "./Quetes";
function Data() {
  //Declare state variable for quests
  const [data, setData] = useState("");
  const [quotes, setQuotes] = useState([]);

  //Function to call Next Function get the data from server.
  useEffect(() => {
    Next();
  }, []);

   //Function to call api get the data from server.
  const Next = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setData(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  //handle Save data which was saved by user
  const handleSave = (data) => {
    setQuotes([...quotes, data]);
  };
  return (
    <div className="Data-main">
      <div className="Data-Card">
        {/* Passing the value to Quetes Component */}
        <Quetes quote={data} onSave={handleSave}  />
        
        <button onClick={Next} className="btn-1">Next</button>
       
        <div className="saved-quotes">
          {quotes.map((q, index) => (
            <div key={index} className="saved-quote-card">
              <p>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
