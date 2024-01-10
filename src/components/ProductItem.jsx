import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice'; // Assume there is a removeFromCart action in CartSlice
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const generateStars = (rate) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half">⭐️</span>);
  }

  return stars;
};

const ProductItem = ({ item }) => {
  
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    setAddedToCart(true);
  }

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item)); // Make sure you have a removeFromCart action in your CartSlice
    setAddedToCart(false);
  }

  return (
    <div className='flex gap-3 flex-col bg-white m-3 w-[300px] h-[380px] p-3'>
      <img className="ml-auto mr-auto w-[200px] h-[200px]" src={item.image} alt="product image" />
      <p>{item.title.length > 25 ? item.title.substr(0, 25) + '...' : item.title}</p>
      <p>{generateStars(item.rating.rate)} <span>{item.rating.count}</span></p>
      <p>${item.price}</p>
      
      {addedToCart ? (
        <div className="flex items-center">
          <p><CheckCircleIcon/> Added to Cart</p>
          <button onClick={() => removeItemFromCart(item)} className='ml-2 text-red-500 duration-300'>
            <DeleteIcon />
          </button>
        </div>
      ) : (
        <button onClick={() => addItemToCart(item)} className='bg-[#deaf38] hover:bg-[#A88734] p-[5px] border-[0.5px]  border-[#9C7C31] rounded-[5px] text-[12px] font-[500px] duration-300 '>Add to Cart</button>
      )}
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
