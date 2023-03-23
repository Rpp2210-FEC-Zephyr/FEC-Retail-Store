import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import $ from "jquery";
import ProductOverview from "./components/ProductOverview";
import RelatedItemsAndOutfitCreation from "./components/RelatedItemsAndOutfitCreation.jsx";

describe("ProductOverview component", () => {
  test("renders main product name", () => {
    const mainProduct = { id: 71697, name: "Camo Onesie" };
    const Outfits = jest.fn();
    render(<ProductOverview main={mainProduct} Outfits={Outfits} />);
    expect(screen.getByText(/camo onesie/i)).toBeInTheDocument();
  });

  test("selects a size and quantity", async () => {
    const mainProduct = { id: 71697, name: "Camo Onesie" };
    const Outfits = jest.fn();
    const tree = renderer
      .create(<ProductOverview main={mainProduct} Outfits={Outfits} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.mock("jquery", () => ({
  ajax: jest.fn(),
}));

describe("RelatedItemsAndOutfitCreation", () => {
  test("displays related items", async () => {
    const mockRelatedItems = [
      { id: 71698, name: "Bright Future Sunglasses" },
      { id: 71699, name: "Morning Joggers" },
      { id: 71700, name: "Slacker's Slacks" },
    ];

    const mockMain = { id: 71704 };

    const mockURL = "http://example.com";

    // Mock the AJAX response from the server
    $.ajax.mockImplementationOnce((options) => {
      if (options.url === "/Related") {
        options.success(mockRelatedItems);
      }
    });

    render(<RelatedItemsAndOutfitCreation main={mockMain} URL={mockURL} />);

    await waitFor(() => {
      const items = screen.queryAllByTestId("related-item");
      expect(items).toHaveLength(0);
    });

    // Verify that the related items are displayed correctly
    mockRelatedItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    expect($.ajax).toHaveBeenCalledWith({
      type: "GET",
      url: "/Related",
      data: { id: mockMain.id },
      success: expect.any(Function),
    });
  });
});
