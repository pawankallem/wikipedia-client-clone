import React from 'react';
import SearchResult from '../SearchResult';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <SearchResult key={index} title={result.title} snippet={result.snippet} />
      ))}
    </div>
  );
}

export default SearchResults;
