import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../store/cartSlice"
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const [ isInCart, setIsInCart ] = useState(false);
  const { id, name, price, image } = product;

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === id);

    setIsInCart(productInCart);

  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
