import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { toast } from "react-toastify";
import MapCard from "../components/MapCard";

const Dashboard = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [statesData, setStateData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getStatesData();
  }, []);

  const getStatesData = async () => {
    try {
      const url = backendUrl + "/api/dashboard";
      const response = await fetch(url);
      const data = await response.json();
      setStateData(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 to-indigo-600 bg-cover bg-center p-24">
      <Navbar />

      <div>
        {isLoading ? (
          <p>Loading......</p>
        ) : (
          <div
            className="flex flex-row items-center justify-between
           flex-wrap"
          >
            {statesData.map((eachState) => (
              <MapCard key={eachState.id} cardData={eachState} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
