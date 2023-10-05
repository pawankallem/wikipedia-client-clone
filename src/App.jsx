import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      let response = await axios.get(`/scrape/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
