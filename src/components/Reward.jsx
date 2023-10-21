import React from "react";
import ScratchCard from "react-scratchcard-v2";
import '../styles/Reward.css';

const Reward = ({ onClose }) => {
  const imageURL = "https://i.ibb.co/QdW0WtP/Group-17scratchcard.png"; // New image URL

  return (
    <div className="popup-container">
      
      <div className="image-container">
        <ScratchCard
          width={300}
          height={300}
          image={imageURL}
          finishPercent={80}
          onComplete={() => console.log("complete")}
        />
        <p className="reward-text">Rs100</p>
      </div>
    </div>
  );
};

export default Reward;
