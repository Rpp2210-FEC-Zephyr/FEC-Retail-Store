import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductOverview from "./ProductOverview";

// describe("ProductOverview", () => {
//   const main = {
//     id: 1,
//     name: "Test Product",
//   };
//   const Outfits = jest.fn();

//   test("renders ProductOverview component", () => {
//     render(<ProductOverview main={main} Outfits={Outfits} />);
//     const productOverview = screen.getByTestId("product-overview");
//     expect(productOverview).toBeInTheDocument();
//   });

//   test("changes style on click", () => {
//     render(<ProductOverview main={main} Outfits={Outfits} />);
//     const styleOption = screen.getByText("Test Style 2");
//     fireEvent.click(styleOption);
//     const selectedStyle = screen.getByText("Test Style 2 (Selected)");
//     expect(selectedStyle).toBeInTheDocument();
//   });

//   test("adds product to bag on click", () => {
//     render(<ProductOverview main={main} Outfits={Outfits} />);
//     const addToBag = screen.getByText("Add to Bag");
//     fireEvent.click(addToBag);
//     const successAlert = screen.getByText("Success");
//     expect(successAlert).toBeInTheDocument();
//   });

//   test("adds product to favorites on click", () => {
//     render(<ProductOverview main={main} Outfits={Outfits} />);
//     const addToFavorites = screen.getByText("Add to Favorites");
//     fireEvent.click(addToFavorites);
//     const status = screen.getByText("Added to Favorites");
//     expect(status).toBeInTheDocument();
//   });
// });
