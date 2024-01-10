import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import Header from "../components/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Checkbox } from "@mui/material";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };
  
  
  // Calculate total quantity and price
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);




    // start for  "Back to Top" button

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    
        // Cleanup scroll event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        // Show/hide "Back to Top" button based on scroll position
        const backButton = document.getElementById("back-to-top");
        if (backButton) {
          if (window.scrollY > 100) {
            backButton.style.display = "block";
          } else {
            backButton.style.display = "none";
          }
        }
      };
    
      const scrollToTop = () => {
        // Smooth scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
      // Attach scroll event listener
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      // end for back top tap button 



  return (
    <>
      <Header />
      <div className="flex cart Cart bg-gray-200">
        {/* left cart */}
        <div className="flex-initial bg-white w-[70%] m-4 p-3 ">
          <h1 className="border-b font-bold text-3xl border-gray-300 py-[20px]">
            Shopping Cart
          </h1>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex mb-[20px] items-center border-b border-gray-300 py-[10px]"
            >
              {/* image */}
              <div>
                <img
                  src={item.image}
                  alt="Image"
                  className="w-[100px] h-[100px] "
                />
              </div>

              {/* description */}
              <div className="mt-[10px] ml-[10px] gap-2 flex-grow">
                <p className="font-bold">
                  {item.title.length > 50
                    ? item.title.substr(0, 50) + "..."
                    : item.title}
                </p>
                <p className="mt-[8px] flex-grow">
                  {item.description.length > 80
                    ? item.description.substr(0, 80) + "..."
                    : item.description}
                </p>
                <p className="mt-[8px]">{item.price}</p>
              </div>

              {/* buttons */}
              <div className="flex items-center">
                <div className="flex gap-2 items-center">
                  <div
                    onClick={() => handleDecrement(item)}
                    className="py-1 px-4 bg-gray-300 hover:bg-gray-400 rounded cursor-pointer"
                  >
                    -
                  </div>
                  <div>{item.quantity}</div>
                  <div
                    onClick={() => handleIncrement(item)}
                    className="py-1 px-4 bg-gray-300 hover:bg-gray-400 rounded cursor-pointer"
                  >
                    +
                  </div>
                </div>
                {/* <h5 className="mt-[12px] ml-[10px]">{item.price * item.quantity}</h5> */}
              </div>

              <div className="px-2">
                <p
                  onClick={() => handleRemove(item)}
                  className="py-1 px-4 bg-orange-500 hover:bg-orange-600 rounded cursor-pointer"
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
          <div className="ml-[650px]">
            <p className="text-black text-2xl ">
              Subtotal : ({totalQuantity} items):{" "}
              <span className="font-bold">{totalPrice}</span>
            </p>
          </div>
        </div>

        {/* right cart */}
        <div className="flex-initial w-[30%] m-4 p-3">
          <div className="bg-white  text-black p-4">
            <p className="text-black mb-4">
              <CheckCircleIcon className="text-green-500" /> Your order
              qualifies for FREE Shipping. Choose this option at checkout. See
              details
            </p>
            <p className="text-black text-2xl ">
              Subtotal : ({totalQuantity} items):{" "}
              <span className="font-bold">{totalPrice}</span>
            </p>
            <p className="text-black mb-4">
              <span>
                <Checkbox />
              </span>{" "}
              This order contains a gift
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-[100px] rounded cursor-pointer">
              Proceed to checkout
            </button>
          </div>

          {/* display latest items */}
          <div className="bg-white text-black p-4 mt-4">
            <p>Often reordered in Grocery</p>
            <ul></ul>
          </div>
        </div>
        {/* right side cart end */}
      </div>

      <div className="text-black m-4 p-3">
        <p>Often reordered in Grocery</p>
        <ul></ul>
      </div>

      <div className=" bg-gray-800 text-white p-4 text-center cursor-pointer"
      onClick={scrollToTop}>
        <p>Back to tap</p>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;
