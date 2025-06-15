import { useEffect, useState } from "react";

const Rating = ({ 
  defaultRating = 4, 
  isEditable = true, 
  onRatingChange = () => {}, 
  className = "",
}) => {
  const [selectedRating, setSelectedRating] = useState(defaultRating);

  useEffect(() => {
    onRatingChange(selectedRating);
  }, [selectedRating]);

  const handleStarClick = (value) => {
    if (isEditable) {
      setSelectedRating(value);
    }
  };

  // Generate a unique name for each rating component instance
  const ratingName = `rating-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`rating ${!isEditable && "pointer-events-none"}`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name={ratingName}
          className={`mask mask-star-2 ${className} ${
            value <= selectedRating ? 'bg-orange-400' : 'bg-orange-400/20'
          }`}
          onClick={() => handleStarClick(value)}
          onChange={() => {}} 
          checked={value === selectedRating}
        />
      ))}
    </div>
  );
};

export default Rating