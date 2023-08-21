import React from "react";
import CardSection from "./CardSection";

// The Product Details are stored in JSON format
// which is used to display the product details
const Product_Details = [
  {
    id: 1,
    sale: "",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Fancy Product",
    rating: false,
    price: "$40.00 - $80.00",
    button: "View Option",
  },
  {
    id: 2,
    sale: "sale",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    rating: true,
    price: "$20.00 $18.00",
    button: "Add to Cart",
  },
  {
    id: 3,
    sale: "sale",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Sale Item",
    rating: false,
    price: "$50.00 $25.00",
    button: "Add to Cart",
  },
  {
    id: 4,
    sale: "",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Propular Item",
    rating: true,
    price: "$40.00",
    button: "Add to Cart",
  },
  {
    id: 5,
    sale: "sale",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Sale Item",
    rating: false,
    price: "$50.00 $25.00",
    button: "Add to Cart",
  },
  {
    id: 6,
    sale: "",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Fancy Product",
    rating: false,
    price: "$40.00 - $80.00",
    button: "View Option",
  },
  {
    id: 7,
    sale: "sale",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    rating: true,
    price: "$20.00 $18.00",
    button: "Add to Cart",
  },
  {
    id: 8,
    sale: "",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Propular Item",
    rating: true,
    price: "$40.00",
    button: "Add to Cart",
  },
];

// This is Main Section where the Outer Layer is Designed
// and then called the cardSection to display the product details one-by-one
function MainSection({ btnCartCount }) {
  // The Product_Details are copied to details
  const details = Product_Details;
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Here Details are mapped to traverse array of prodcut items  */}
          {details.map((item) => {
            /* Here the CardSection is called to display as much the No. of products in the JSON format */
            return <CardSection items={item} btnCartCount={btnCartCount} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default MainSection;
