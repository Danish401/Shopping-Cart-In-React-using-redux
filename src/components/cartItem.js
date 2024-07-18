import React, { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="flex  justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-0 mr-1 rounded-md">
      <img src={detail.image} alt="" className="w-12" />
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className="w-120 flex justify-between gap-2">
        <button
          className="bg-gray-800 rounded-full mr-2 flex items-center w-8 h-8 text-white"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span className="flex items-center">{quantity}</span>
        <button
          className="bg-gray-800 rounded-full flex items-center  w-8 h-8 text-white"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
