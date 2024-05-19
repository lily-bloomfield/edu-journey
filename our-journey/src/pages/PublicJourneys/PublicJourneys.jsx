import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./PublicJourneys.css";
import SearchBar from "../../components/PublicJourneys/SearchBar/SearchBar";
import PublicJourneysCards from "../../components/PublicJourneys/PublicJourneysCard/PublicJourneysCards";
const PublicJourneys = () => {
  return (
    <div className="publicJourneys-container">
      <SearchBar />
      <PublicJourneysCards />
    </div>
  );
};

export default PublicJourneys;
