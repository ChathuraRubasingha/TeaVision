import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/HeroCss.css";

function HeroPage() {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/category");
  };
  const handleFiberClick = () => {
    navigate("/fiber");
  };
  const handleStrockClick = () => {
    navigate("/Strock");
  };

  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="left-container">
          <div className="hero-header">
            Welcome to
            <br />{" "}
            <span style={{ fontSize: "4.5rem" }}>
              <span style={{ color: "green" }}>Tea</span>Vision
            </span>
          </div>
          <div className="hero-subheading">
            Analyze Tea Quality Instantly with Image Processing
          </div>
          <div className="hero-subheading2">
            Upload your tea images and let our advanced algorithms assess
            quality and variations in seconds.
          </div>
          <div className="button-container">
            <div className="hero-button" onClick={handleCategoryClick}>
              Category Analysis
            </div>
            <div className="hero-button" onClick={handleFiberClick}>
              Fiber Analysis
            </div>
            <div className="hero-button" onClick={handleStrockClick}>
              Strocks Analysis
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
}

export default HeroPage;
