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
import WriteAReview from "./components/WriteAReview";
import RatingsOverview from "./components/RatingsOverview";

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
  test('renders a heading with text "Rating And Reviews!"', () => {
    const dummyObj = {
      id: 1,
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

    render(<RatingsAndReviews main={dummyObj} count={0} />);
    const words = screen.getByText(/Rating And Reviews!/i);
    expect(words).toBeInTheDocument();
  });
});

// test("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<RatingsAndReviews />, div);
// });

test("testing IndividualReviews", () => {
  const data = {
    main: {
      id: 1,
    },
    review_id: 5,
    rating: 5,
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
    main: {
      id: 1,
    },
    review_id: 5,
    rating: 0,
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
  const imgElement = screen.getByAltText("Review");
  expect(imgElement).toHaveAttribute("src", data.photos[0].url);
});

test("testing IndividualReviews photos", () => {
  const data = {
    main: {
      id: 1,
    },
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
  const imgElement = screen.getByAltText("Review");
  expect(imgElement).toHaveAttribute("src", data.photos[0].url);
});

describe("WriteAReview", () => {
  it("should render the component", () => {
    const { getByText } = render(<WriteAReview />);
    const writeReviewButton = getByText("WRITE REVIEW");
    expect(writeReviewButton).toBeInTheDocument();
  });

  it("should show the form popup when the Write Review button is clicked", () => {
    const { getByText, getByLabelText } = render(<WriteAReview />);
    const writeReviewButton = getByText("WRITE REVIEW");

    fireEvent.click(writeReviewButton);

    const nicknameInput = getByText("What is your nickname?");
    expect(nicknameInput).toBeInTheDocument();
  });

  it("should submit review when the form is filled out and submitted", () => {
    const productId = "123";
    const mockAjaxSuccess = jest.fn();
    $.ajax.mockImplementation(({ success }) => {
      success();
    });

    const { getByText, getByLabelText } = render(
      <WriteAReview id={productId} />
    );
    const writeReviewButton = getByText("WRITE REVIEW");

    fireEvent.click(writeReviewButton);

    const nicknameInput = getByLabelText("What is your nickname?");
    fireEvent.change(nicknameInput, { target: { value: "test nickname" } });

    const emailInput = getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const recommendSelect = getByLabelText("Do you recommend this product?");
    fireEvent.change(recommendSelect, { target: { value: "true" } });

    const ratingStars = screen.getAllByRole("button", { name: "star" });
    fireEvent.click(ratingStars[3]);

    const summaryInput = getByLabelText("Summary:");
    fireEvent.change(summaryInput, { target: { value: "test summary" } });

    const bodyInput = getByLabelText("Write your review:");
    fireEvent.change(bodyInput, { target: { value: "test body" } });

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    const expectedReviewData = {
      product_id: productId,
      rating: 4,
      summary: "test summary",
      body: "test body",
      recommend: true,
      nickname: "test nickname",
      email: "test@example.com",
      photos: ["", "", "", "", ""],
      characteristics: {
        14: NaN,
        15: NaN,
        16: NaN,
        17: NaN,
        18: NaN,
        19: NaN,
      },
    };

    expect($.ajax).toHaveBeenCalledWith({
      url: "reviews",
      method: "POST",
      data: JSON.stringify(expectedReviewData),
      contentType: "application/json",
      success: expect.any(Function),
      error: expect.any(Function),
    });
    expect(mockAjaxSuccess).toHaveBeenCalled();
  });
});
