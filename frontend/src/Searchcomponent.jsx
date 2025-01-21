import React, { useState } from "react";
import "./App.css";

function Searchcomponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
   <></>
  );
}

export default Searchcomponent;
