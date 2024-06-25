import Header from "../Components/Header";
import Footer from "../Components/footer";
import "./index.css";

function App() {
  return (
    <body>
      <div className="wrapper">
        <Header />
        <main>
          <div className="mobile_slider">
            <img src="Слайдер_mobile.svg" alt="Слайдер" />
          </div>
          <div className="slider">
            <img src="Слайдер.svg" alt="Слайдер" />
          </div>
          <div className="cart">
            <div className="cart_short">
              <a href="#"> <img src="Mask Group.svg" alt="Mask Group" className="cart_short_id" /> </a>
              <a href="#"> <img src="Mask Group2.svg" alt="Mask Group2" className="cart_short_id" /> </a>
              <a href="#"> <img src="Mask Group3.svg" alt="Mask Group3" className="cart_short_id" /> </a>
            </div>
            <div className="cart_long">
              <a href="#"> <img src="Mask Group4.svg" alt="Mask Group4" className="cart_long_id" /> </a>
              <a href="#"> <img src="Mask Group5.svg" alt="Mask Group5" className="cart_long_id" /> </a>
            </div>
            <div className="cart_short">
              <a href="#"> <img src="Mask Group6.svg" alt="Mask Group6" className="cart_short_id" /> </a>
              <a href="#"> <img src="Mask Group7.svg" alt="Mask Group7" className="cart_short_id" /> </a>
              <a href="#"> <img src="Mask Group8.svg" alt="Mask Group8" className="cart_short_id" /> </a>
            </div>
          </div>
          <div className="product_cart">

          </div>
        </main>
        <Footer />
      </div>
    </body>
  )
}

export default App;