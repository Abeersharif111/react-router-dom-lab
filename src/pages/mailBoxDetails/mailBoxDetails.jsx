import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { Spin } from "antd";

function MailBoxDetails() {
  const [mailBox, setMailBOx] = useState(null);
  const { id } = useParams();

  async function getMailBOx() {
    try {
      const foundMailBOx = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
      setMailBOx(foundMailBOx.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMailBOx();
  }, []);

  return (
    <div>
      <h1>MailBox Details</h1>

      {mailBox ? (
        <>
          <h2>MailbOx Owner: {mailBox.owner}</h2>
          <p>Mailbox size: {mailBox.size}</p>
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default MailBoxDetails;
