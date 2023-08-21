import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import NavigationBar from "./Components/NavigationBar";

// This is the App Component

function App() {
  const [cart, setCart] = useState(0);

  // This function is called from the Card Section Component when the button is clicked
  const btnCartCount = (status) => {
    // It gets a parameter as status
    if (status) {
      // If the status is true is increase the cart number by 1
      setCart(cart + 1);
    } else {
      // If the status is false is decrease the cart number by 1
      setCart(cart - 1);
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar Section */}
      <NavigationBar cartCount={cart} />
      {/* Header Section */}
      <Header />
      {/* Product Main Section */}
      <MainSection btnCartCount={btnCartCount} />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
