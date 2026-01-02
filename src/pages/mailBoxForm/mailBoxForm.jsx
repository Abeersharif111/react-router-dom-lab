import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateMailBox() {
  const [formData, setFormData] = useState({
    owner: "",
    size: "",
  });

  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const createdMailbox = await axios.post(import.meta.env.VITE_API_URL, formData);
      setFormData(createdMailbox);
      navigate("/mailBoxList");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //useEffect(() => {
  //  CreateMailBox();
  // }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Mailbox owner:</label>
        <input onChange={handleChange} value={formData.owner} name="name" id="name" type="text" />

        <label htmlFor="size">Mailbox Size:</label>
        <select value={formData.size} name="size" onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button>Create Mailbox</button>
      </form>
    </div>
  );
}

export default CreateMailBox;
