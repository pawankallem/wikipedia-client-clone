import React, { useRef, useState } from "react";
import SearchResults from "../SearchResults";
import axios from "axios";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggetionsData, setSuggetionsData] = useState([]);
  const timeoutRef = useRef(null);

  const handleSuggetions = async (text) => {
    try {
      // let response = await axios.get(`http://127.0.0.1:5000/suggestion/${text}`);
      let response = await axios.get(`https://wiki-server-clone.onrender.com/suggestion/${text}`);
      if (response.status === 200) setSuggetionsData(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleInputChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      console.log(`API call with query: ${value} and ${searchTerm}`);
      value && handleSuggetions(value);
    }, 500);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Wikipedia"
          value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {suggetionsData && (
        <div className="suggetion-container">
          <SearchResults results={suggetionsData} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
