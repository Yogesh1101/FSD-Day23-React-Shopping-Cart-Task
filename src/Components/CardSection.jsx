import React, { useState } from "react";

// This is the Card Section Component where the one card is designed
// and it generates when it is called
// It takes two props -
// 1 - items where the single product detail array is passed
// 2 - btnCartCount is used here to inc/dec the cart number when it is clicked
function CardSection({ items, btnCartCount }) {
  const buttonText = items.button;
  const [currentButtonText, setCurrentButtonText] = useState(buttonText);
  const [status, setStatus] = useState(true);

  // Here, btnCart function is used to change and call the btnCartCount when the button is clicked
  const btnCart = () => {
    if (status) {
      // Once the button is clicked it changes the button text to "Remove from Cart"
      setCurrentButtonText("Remove from Cart");
      // This updates the status
      setStatus(false);
      // This function goes to the App Component to inc. the cart count
      btnCartCount(true);
    } else {
      // When the button is clicked again it changes the button text to "Add to Cart"
      setCurrentButtonText(buttonText);
      // This updates the status
      setStatus(true);
      // This function goes to the App Component to dec. the cart count
      btnCartCount(false);
    }
  };

  const badgeStyle = {
    top: "0.5rem",
    right: "0.5rem",
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Sale Badge */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={badgeStyle}
        >
          {items.sale}
        </div>
        {/* Product Image */}
        <img src={items.image} alt="..." />
        {/* Product Details */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product Name */}
            <h5 className="fw-bolder">{items.name}</h5>
            {/* Product Rating */}
            {items.rating ? (
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
              </div>
            ) : null}
            {/* Product Price */}
            {items.price}
          </div>
        </div>
        {/* Product Action */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={() => {
                btnCart();
              }}
              className="btn btn-outline-dark mt-auto"
              href="#!"
            >
              {currentButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
