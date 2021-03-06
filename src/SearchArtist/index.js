import React from "react";
import "./index.scss";

const SearchArtist = ({ artists, onSearchArtist, onArtistSelected }) => (
  <div className="search-artist--container">
    <input
      className="search-artist--input"
      placeholder="Search here"
      onChange={({ target: { value } }) => onSearchArtist(value)}
    />
    {!!artists.length && (
      <div className="search-artist--dropdown">
        <p className="search-artist--dropdown--title">Search Results</p>
        <div className="search-artist--dropdown--elements">
          {artists.map(artist => (
            <div
              key={`search-artist--dropdown::${artist.name}`}
              className="search-artist--dropdown--element"
              onClick={() => onArtistSelected(artist)}
            >
              <p className="search-artist--dropdown--element-text">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default SearchArtist;
