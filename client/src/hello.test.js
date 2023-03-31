import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import $ from "jquery";
import ProductOverview from "./components/ProductOverview";
import RelatedItemsAndOutfitCreation from "./components/RelatedItemsAndOutfitCreation.jsx";
import RatingsAndReviews from "./components/RatingsAndReviews";
import IndividualReview from "./components/IndividualReviews";

// describe("ProductOverview component", () => {
//   test("renders main product name", () => {
//     const mainProduct = { id: 71697, name: "Camo Onesie" };
//     const Outfits = jest.fn();
//     render(<ProductOverview main={mainProduct} Outfits={Outfits} />);
//     expect(screen.getByText(/camo onesie/i)).toBeInTheDocument();
//   });

//   test("selects a size and quantity", async () => {
//     const mainProduct = { id: 71697, name: "Camo Onesie" };
//     const Outfits = jest.fn();
//     const tree = renderer
//       .create(<ProductOverview main={mainProduct} Outfits={Outfits} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// jest.mock("jquery", () => ({
//   ajax: jest.fn(),
// }));

// describe("RelatedItemsAndOutfitCreation", () => {
//   test("displays related items", async () => {
//     const mockRelatedItems = [
//       { id: 71698, name: "Bright Future Sunglasses" },
//       { id: 71699, name: "Morning Joggers" },
//       { id: 71700, name: "Slacker's Slacks" },
//     ];

//     const mockMain = { id: 71704 };

//     const mockURL = "http://example.com";

//     // Mock the AJAX response from the server
//     $.ajax.mockImplementationOnce((options) => {
//       if (options.url === "/Related") {
//         options.success(mockRelatedItems);
//       }
//     });

//     render(<RelatedItemsAndOutfitCreation main={mockMain} URL={mockURL} />);

//     await waitFor(() => {
//       const items = screen.queryAllByTestId("related-item");
//       expect(items).toHaveLength(0);
//     });

//     // Verify that the related items are displayed correctly
//     mockRelatedItems.forEach((item) => {
//       expect(screen.getByText(item.name)).toBeInTheDocument();
//     });

//     expect($.ajax).toHaveBeenCalledWith({
//       type: "GET",
//       url: "/Related",
//       data: { id: mockMain.id },
//       success: expect.any(Function),
//     });
//   });
// });

// jest.mock("node-fetch");

describe("RatingsAndReviews component", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });
  it("renders without crashing", async () => {
    render(<RatingsAndReviews />);
    expect(screen.getByText("Rating And Reviews!")).toBeInTheDocument();
  });

  test('renders a heading with text "Rating And Reviews!"', () => {
    const dummyObj = [
      {
        id: 71697,
      },
    ];

    render(<RatingsAndReviews currentProduct={dummyObj} count={0} />);
    const words = screen.getByText(/Rating And Reviews!/i);
    expect(words).toBeInTheDocument();
  });

  // it("loads reviews data from the server", async () => {
  //   const data = {
  //     results: [
  //       {
  //         review_id: 1,
  //         rating: 5,
  //         summary: "Great product!",
  //         body: "I really love this product!",
  //       },
  //       {
  //         review_id: 2,
  //         rating: 4,
  //         summary: "Good product!",
  //         body: "I like this product!",
  //       },
  //     ],
  //     count: 2,
  //   };

  //   // mock the response from the server
  //   global.fetch.mockResolvedValueOnce({
  //     json: () => Promise.resolve(data),
  //   });

  //   render(<RatingsAndReviews main={{ id: "1" }} />);

  //   // wait for the reviews to load
  //   await screen.findByText("Great product!");

  //   expect(screen.getByText("Great product!")).toBeInTheDocument();
  //   expect(screen.getByText("Good product!")).toBeInTheDocument();
  //   expect(screen.getByText("2 reviews, sorted by")).toBeInTheDocument();
  // });
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RatingsAndReviews />, div);
});

test("testing IndividualReviews", () => {
  const data = {
    review_id: 5,
    rating: 3,
    summary: "I'm enjoying wearing these shades",
    recommend: false,
    response: null,
    body: "Comfortable and practical.",
    date: "2019-04-14T00:00:00.000Z",
    reviewer_name: "shortandsweeet",
    helpfulness: 5,
    photos: [
      {
        id: 1,
        url: "urlplaceholder/review_5_photo_number_1.jpg",
      },
      {
        id: 2,
        url: "urlplaceholder/review_5_photo_number_2.jpg",
      },
    ],
  };
  render(<IndividualReview obj={data} />);
  expect(screen.getByText(/shortandsweeet/i).toBeInTheDocument);
  expect(screen.getByText(/Comfortable and practical/i).toBeInTheDocument);
});

test("testing IndividualReviews photos", () => {
  const data = {
    review_id: 5,
    rating: 3,
    summary: "I'm enjoying wearing these shades",
    recommend: false,
    response: null,
    body: "Comfortable and practical.",
    date: "2019-04-14T00:00:00.000Z",
    reviewer_name: "shortandsweeet",
    helpfulness: 5,
    photos: [
      {
        id: 1,
        url: "urlplaceholder/review_5_photo_number_1.jpg",
      },
    ],
  };
  render(<IndividualReview obj={data} />);
  const imgElement = screen.getByAltText("IMAGE!!!");
  expect(imgElement).toHaveAttribute("src", data.photos[0].url);
});
