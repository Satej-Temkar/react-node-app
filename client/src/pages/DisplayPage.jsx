import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5000";

const DisplayPage = () => {
  const [user, setUser] = useState(null);
  const [dog, setDog] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/user`).then((res) => setUser(res.data));
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => setDog(res.data.message));
  }, []);

  const getAge = (dob) => {
    return dayjs().diff(dayjs(dob), "year");
  };
  if (!dog || !user) return <div>Loading...</div>;

  return (
    <>
      <div className="container">
        <div className="title">
          <p>User Details</p>
        </div>
        <div className="user_display">
          <div className="img_container">
            <img src={dog} alt="Dog" />
          </div>
          <div className="udetails_container">
            <div className="sub-title">
              <h3>Full Name: </h3>
              <span>{user.fname} {user.lname}</span>
            </div>

            <div className="sub-title">
              <h3>Date Of Birth: </h3>
              <span>{user.dob}</span>
            </div>

            <div className="sub-title">
              <h3>Age: </h3>
              <span>{getAge(user.dob)}</span>
            </div>
          </div>
        </div>
        <div className="reg_btn">
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </>
  );
};

export default DisplayPage;
