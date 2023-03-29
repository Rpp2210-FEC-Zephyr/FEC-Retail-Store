import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import RelatedItems from "./RelatedItems.jsx";

const RelatedItemsAndOutfitCreation = ({ main, URL, DetailModal }) => {
  const [related, setRelated] = useState(null);

  const getRelated = (id) => {
    $.ajax({
      type: "GET",
      url: "/Related",
      data: { id: id },
      success: (data) => {
        setRelated(data);
      },
    });
  };

  useEffect(() => {
    if (main.id != undefined) {
      getRelated(main.id);
    }
  }, [main]);

  return (
    <div className="RELATE CAROSEL">
      <div className="Title"> RELATED ITEMS</div>
      <div className="Related" key={main ? `${main.id}-related` : null}>
        {related
          ? related.map((item) => (
              <RelatedItems
                key={`${main.id}-${item.id}`}
                item={item}
                URL={URL}
                DetailModal={DetailModal}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default RelatedItemsAndOutfitCreation;
