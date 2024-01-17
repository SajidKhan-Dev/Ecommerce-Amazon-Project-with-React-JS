import { useEffect, useState  } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Body = () => {
  
  const cart = useSelector((state) => state.cart.cart);
  
  const [products, setProducts] = useState([]);
 
  console.log(cart);
 
  useEffect(() => {
    const fetchProducts = async () => {
        await fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(data);
          })
          .catch((error) => console.error("Error fetching products:", error));
      };

    fetchProducts();
  }, []);

  return (
    <div className="bg-[#F0F0F0] h-max " >
      <div className="flex flex-wrap">
        {products.map((item,index) => (
          <ProductItem item={item} key={index} /> 
        ))}
      </div>
    </div>
  );
};

export default Body;
