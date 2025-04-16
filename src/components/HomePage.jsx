import React from "react";
import { useNavigate } from "react-router-dom";
import MovingImages from "./MovingImages";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: "url('https://education.sakshi.com/sites/default/files/2022-05/ttd.jpg')", backgroundSize: "cover", padding: "20px" }}>
      <MovingImages />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => navigate("/form")} style={{ padding: "15px 30px", fontSize: "18px", backgroundColor: "brown", color: "white", border: "none", borderRadius: "10px" }}>
          Add Sevak Details
        </button>
      </div>
    </div>
  );
};

export default HomePage;
