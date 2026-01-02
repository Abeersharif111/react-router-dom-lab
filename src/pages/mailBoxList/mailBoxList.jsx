import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router";

function AllMailBoxes() {
  const [mailBoxes, setMailBoxes] = useState([]);

  async function getAllMailBoxes() {
    try {
      const allMailBoxes = await axios.get(import.meta.env.VITE_API_URL);
      setMailBoxes(AllMailBoxes.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMailBoxes();
  }, []);

  return (
    <div>
      {mailBoxes.map((oneMailBOx) => (
        <div key={oneMailBOx._id}>
          <p>{oneMailBOx.owner}</p>
          {/* <p>{oneMailBOx.size}</p> */}
          <Link to={`/mailBoxes/${oneMailBOx._id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllMailBoxes;
