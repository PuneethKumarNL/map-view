import React from "react";
import { useNavigate } from "react-router-dom";

const MapCard = (props) => {
  const navigate = useNavigate();
  const { cardData } = props;
  const { mapImage, name, capital, id } = cardData;
  const onClickView = () => {
    navigate(`/map/${id}`);
  };
  return (
    <div className="bg-indigo-300 rounded-lg h-96 w-60 mb-10 p-4 flex flex-col items-center justify-between">
      <img className="h-70 w-60" src={mapImage} alt={name} />
      <div className="flex flex-col items-start justify-center">
        <div>
          <h1>Name: {name}</h1>
          <p>Capital: {capital}</p>
        </div>
        <button
          onClick={onClickView}
          className="bg-indigo-600 text-white h-8 w-32 rounded-2xl cursor-pointer m-2"
          type="button"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default MapCard;
