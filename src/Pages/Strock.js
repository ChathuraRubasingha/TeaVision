import React, { useState } from "react";
import axios from "axios";
import "../Style/Category.css";

function Strock() {
  const [particleImage, setParticleImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [strockData, setStrockData] = useState(null);

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

  const handleSubmit = async () => {
    setIsLoading(true);
    setStrockData(null); // Clear previous result

    try {
      const formData = new FormData();
      if (particleImage) {
        // Convert base64 to a Blob
        const particleBlob = await fetch(particleImage).then((res) =>
          res.blob()
        );
        formData.append("image", particleBlob, "particleImage.jpg");

        const response = await axios.post(
          "http://127.0.0.1:8080/identify-stroke",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        // Assuming the response contains the `result_image` and `statistics`
        setStrockData(response.data);
      } else {
        console.error("No image provided.");
      }
    } catch (error) {
      console.error("Error submitting image:", error);
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const isSubmitDisabled = !particleImage;

  return (
    <div className="category-container">
      <div className="c-header">Strock Analysis</div>

      <div className="c-inputs">
        <div className="input-feild">
          <label>Input Image:</label>
          <div className="input-image">
            <input
              type="file"
              name="particle"
              onChange={(e) => handleImageChange(e, setParticleImage)}
            />
            {particleImage && <img src={particleImage} alt="Particle" />}
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

      {showModal && strockData && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Submission Successful!</h3>
            <h1>Results!</h1>
            {strockData.result_image && (
              <div>
                <h4>Result Image:</h4>
                <img src={`data:image/jpeg;base64,${strockData.result_image}`} alt="Result" style={{ maxWidth: "100%" }} />
              </div>
            )}
            {strockData.statistics && (
              <div>
                <h4>Statistics:</h4>
                <p>Brown Particle Ratio: {strockData.statistics.brown_particle_ratio}</p>
                <p>Number of Brown Particles: {strockData.statistics.number_of_brown_particles}</p>
                <p>Number of External Contours: {strockData.statistics.number_of_external_contours}</p>
              </div>
            )}
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Strock;
