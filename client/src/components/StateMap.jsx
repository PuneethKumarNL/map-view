import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { useParams } from "react-router-dom";

const StateMap = () => {
  const [states, setStates] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();

  useEffect(() => {
    getMapData();
  }, []);

  const getMapData = async () => {
    const url = backendUrl + `/api/map/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setStates(data);
    setLoading(false);
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div style={{ height: "100vh", width: "100%" }}>
          <MapContainer
            center={[states.coordinates.latitude, states.coordinates.longitude]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[
                states.coordinates.latitude,
                states.coordinates.longitude,
              ]}
            >
              <Popup>
                <h3>{states.name}</h3>
                <p>Capital: {states.capital}</p>
                <img
                  src={states.mapImage}
                  alt={`${states.name} Map`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default StateMap;
