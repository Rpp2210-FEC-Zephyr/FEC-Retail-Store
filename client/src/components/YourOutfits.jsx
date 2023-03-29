import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import YourOutfitsItem from "./YourOutfitsItem.jsx";

const YourOutfits = ({ outfit, URL, Toggle }) => {
  return (
    <div class="OUTFIT CAROSEL">
      <div class="Title"> Your Outfits</div>
      {console.log("THE OUTFIT", outfit)}
      <div class="Related">
        {outfit.length != 0 ? (
          outfit.map((item) => (
            <YourOutfitsItem item={item} URL={URL} Toggle={Toggle} />
          ))
        ) : (
          <div class="EmptyOutfit"> NOTHING TO SHOW HERE!! Keep Shopping !</div>
        )}
      </div>
    </div>
  );
};

export default YourOutfits;
