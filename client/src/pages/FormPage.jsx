import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "https://react-node-app-server.onrender.com";

const FormPage = () => {
  const [form, setForm] = useState({ fname: "", lname: "", dob: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, dob } = {
      fname: form.fname.trim(),
      lname: form.lname.trim(),
      dob: form.dob,
    };

    if (!fname || !lname || !dob) {
      return alert("All fields are required");
    }

    const today = new Date().toISOString().split("T")[0];
    if (dob > today) {
      return alert("Date of Birth cannot be in the future");
    }
    try {
      await axios.post(`${API_URL}/api/user`, form);
      navigate("/display");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <p>User Form</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="user_details">
            <div className="input_box">
              <label>First Name</label>
              <input
                name="fname"
                type="text"
                onChange={handleChange}
                placeholder="Enter First Name"
              
              />
            </div>
            <div className="input_box">
              <label>Last Name</label>
              <input
                name="lname"
                type="text"
                onChange={handleChange}
                placeholder="Enter Last Name"
              
              />
            </div>
            <div className="input_box">
              <label>Date Of Birth</label>
              <input type="date" name="dob" onChange={handleChange} />
            </div>
          </div>
          <div className="reg_btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormPage;

