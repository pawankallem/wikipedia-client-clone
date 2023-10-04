import React from 'react';

function SearchResult({ title, snippet }) {
  return (
    <div className="search-result">
      <h3>{title}</h3>
      <p>{snippet}</p>
    </div>
  );
}

export default SearchResult;
