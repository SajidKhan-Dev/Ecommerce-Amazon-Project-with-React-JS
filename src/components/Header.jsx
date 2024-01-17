/* eslint-disable react/no-unescaped-entities */
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ReactCountryFlag from "react-country-flag";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  }
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <>
    {/* first nav in mobile first row logo and right side cart and signin and profileicon and second row seachbar  */}
       <div className="overflow-x-auto  gap-5 flex items-center  bg-[#0F1111]  p-[12px]">
        <div onClick={navigateToHome} className="px-[8px] py-[7px] hover:border-white hover:border-solid hover:border cursor-pointer">
          <img
            className="min-w-[150px] sm:w-10  w-[150px] h-[40px]"
            src="https://th.bing.com/th/id/R.e86d8267975822e2f702c16c9c149e37?rik=vSqltwMTDsTbxg&riu=http%3a%2f%2fwww.bizmonthly.com%2fwp-content%2fuploads%2f2020%2f04%2famazon-logo-black.png&ehk=Ffc4jD16P4sohdWSrk%2bC9y5lDgYcvATKVJfYzCM2YPc%3d&risl=&pid=ImgRaw&r=0"
            alt="amazon logo"
          />
        </div>
        <div className="px-[8px] py-[7px] flex items-center hover:border-white hover:border-solid hover:border">
          <LocationOnOutlinedIcon className="text-white mt-3" />
          <div className="pl-2 ">
            <h4 className="text-[13px] text-gray-300 font-thin">Deliver to</h4>
            <h4 className="text-[13px] text-white font-bold">Pakistan</h4>
          </div>
        </div>

        <div className=" flex flex-grow">
          <p className="text-black px-2 flex items-center p-2 rounded-tl-md rounded-bl-md hover:bg-gray-400  duration-300 bg-gray-300">
            All
            <ArrowDropDownOutlinedIcon className="" />
          </p>

          <input
            className="outline-none p-[7px] flex-1 "
            type="text"
            placeholder="search items or products"
          />
          <div className=" flex items-center bg-orange-500 px-[10px] rounded-tr-md rounded-br-md">
            <SearchOutlinedIcon className=" text-white" />
          </div>
        </div>
        <div className="gap-1 items-center px-[8px] py-[7px] hover:border-white hover:border-solid hover:border flex">
          <ReactCountryFlag
            className=""
            countryCode="US"
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title="US"
          />
          <h4 className="text-[17px] text-white font-[400px]">EN</h4>
          <ArrowDropDownOutlinedIcon className="text-white" />
        </div>

        <div className="px-[8px] py-[7px] hover:border-white hover:border-solid hover:border flex items-end">
          <div>
            <h4 className="text-[10px] text-white font-[100px]">
              Hello, Sign in
            </h4>
            <h4 className="text-[13px] font-bold text-white font-[400px]">
              Account & Lists
            </h4>
          </div>
          <ArrowDropDownOutlinedIcon className="text-white" />
        </div>

        <div className="px-[8px] py-[7px] hover:border-white hover:border-solid hover:border flex items-end">
          <div>
            <h4 className="text-[10px] text-white font-[100px]">Returns</h4>
            <h4 className="text-[13px] font-bold text-white font-[400px]">
              & Orders
            </h4>
          </div>
          <ArrowDropDownOutlinedIcon className="text-white" />
        </div>
        <div onClick={navigateToCart}  className="cursor-pointer relative px-[14px] py-[14px] hover:border-white hover:border-solid hover:border flex">
          <ShoppingCartIcon className="text-white " />
          <span className=" text-[10px]  absolute left-[25px] right-[20px] bg-white w-[14px] h-[14px]  border rounded-[7px] text-center">
            {cart.length}
          </span>
          <p className="text-[15px] font-bold mt-1 text-white font-[400px] ">
            Cart
          </p>
        </div>
      </div>

      {/* Second nav in mobile scrolling */}
<div onClick={navigateToHome} className="overflow-x-auto bg-[#232F3E] h-[45px] flex gap-5 items-center cursor-pointer">
  <p className="px-[8px] py-[7px] ml-5 text-white h-[30px] w-auto hover:border-white hover:border-solid hover:border flex items-center">
    <MenuIcon className="text-white" /> All{" "}
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto  hover:border-white hover:border-solid hover:border flex items-center">
    Medical Care
    <ArrowDropDownOutlinedIcon />
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border flex items-center">
    Groceries
    <ArrowDropDownOutlinedIcon />
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border">
    Best Sellers
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border">
    Amazon Basics
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border">
    Today's Deals
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border">
    Registry
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border">
    New Releases
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border flex items-center">
    Prime
    <ArrowDropDownOutlinedIcon />
  </p>
  <p className="text-white px-[8px] py-[7px] h-[30px] w-auto hover:border-white hover:border-solid hover:border flex items-center">
    Customer Service
  </p>
</div>

    </>
  );
};

export default Header;
