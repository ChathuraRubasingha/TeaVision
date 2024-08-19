import React, { useState } from "react";
import "../Style/Category.css";

function Category() {
  const [particleImage, setParticleImage] = useState("");
  const [liquidImage, setLiquidImage] = useState("");
  const [infusionImage, setInfusionImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 2000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const isSubmitDisabled = !(particleImage && liquidImage && infusionImage);

  return (
    <div className="category-container">
      <div className="c-header">Category Analysis</div>

      <div className="c-inputs">
        <div className="input-feild">
          <label>Input Particle Image:</label>
          <div className="input-image">
            <input
              type="file"
              name="particle"
              onChange={(e) => handleImageChange(e, setParticleImage)}
            />
            {particleImage && <img src={particleImage} alt="Particle" />}
          </div>
        </div>
        <div className="input-feild">
          <label>Input Liquid Image:</label>
          <div className="input-image">
            <input
              type="file"
              name="liquid"
              onChange={(e) => handleImageChange(e, setLiquidImage)}
            />
            {liquidImage && <img src={liquidImage} alt="Liquid" />}
          </div>
        </div>
        <div className="input-feild">
          <label>Input Infusion Image:</label>
          <div className="input-image">
            <input
              type="file"
              name="infusion"
              onChange={(e) => handleImageChange(e, setInfusionImage)}
            />
            {infusionImage && <img src={infusionImage} alt="Infusion" />}
          </div>
        </div>
      </div>
      <button
        className="submit-button"
        disabled={isSubmitDisabled || isLoading}
        onClick={handleSubmit}
        style={
          isSubmitDisabled || isLoading
            ? { backgroundColor: "gray", color: "darkgray" }
            : { backgroundColor: "blue" }
        }
      >
        {isLoading ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="spinner" style={{ marginRight: "10px" }}></div>
            Processing...
          </div>
        ) : (
          "Submit"
        )}
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Submission Successful!</h3>
            <h1>Results!</h1>
            <h4>Category: BOP01</h4>
            <h4>Regon: Low</h4>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
