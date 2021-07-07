import React from "react";
import Title from "../components/Title";
import SearchItems from "../components/SearchItems";
import SearchResults from "../components/SearchResults";
import Socket from "../components/Socket";

export default function Search() {
  return (
    <div className="Containter">
      {/* <Socket /> */}
      <Title />
      <SearchItems />
      <h3 style={{ marginLeft: "5%" }}>Search Results</h3>

      <SearchResults />
    </div>
  );
}
