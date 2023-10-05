import React, { useRef, useState } from "react";
import SearchResults from "../SearchResults";
import axios from "axios";
import "./style.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggetionsData, setSuggetionsData] = useState([]);
  const timeoutRef = useRef(null);

  const handleSuggetions = async (text) => {
    try {
      let response = await axios.get(`https://wiki-server-clone.onrender.com/suggestion/${text}`);
      console.log("res: ", response.data);
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
    }, 2000);
  };

  const handleSearch = (name) => {
    let text = searchTerm;
    if (name) {
      const cardData = suggetionsData.find((e) => e.name === name);
      text = cardData.name;
      setSuggetionsData([]);
    }
    onSearch(text);
    setSearchTerm("");
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-bar-popup-container">
          <input
            type="text"
            placeholder="Search Wikipedia"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {suggetionsData.length > 0 && (
            <div className="popup">
              <ul className="suggestions-list">
                {suggetionsData.map((suggestion, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSearch(suggestion.name)}
                  >
                    <img
                      className="suggestion-image"
                      src={suggestion.image}
                      alt={suggestion.name}
                    />
                    <div className="suggestion-details">
                      <p className="suggestion-title">{suggestion.name}</p>
                      <p className="suggestion-description">
                        {suggestion.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button onClick={() => handleSearch("")}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
