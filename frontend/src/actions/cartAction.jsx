import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstant";
import axios from "axios";

// Add to Cart
export const addItemToCart = (product, quantity) => async (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const existingItem = cartItems.find(item => item.productId === product._id);

  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    if (newQuantity <= 0) {
      dispatch({ type: REMOVE_CART_ITEM, payload: product._id });
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          productId: product._id,
          name: product.name,
          price: product.price,
          price50: product.price50Num,
          price100: product.price100Num,
          image: product.images[0].url,
          stock: product.stock,
          quantity: newQuantity,
        },
      });
    }
  } else {
    if (quantity > 0) {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          productId: product._id,
          name: product.name,
          price: product.price,
          price50: product.price50Num,
          price100: product.price100Num,
          image: product.images[0].url,
          stock: product.stock,
          quantity,
        },
      });
    }
  }

  // Save cart data to localStorage after dispatching the action
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};

// Remove item from Cart
export const removeItemFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });

  // Save cart data to localStorage after dispatching the action
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};

// Save Shipping Info
export const saveShippingInfo = (data) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  // Save shipping info data to localStorage after dispatching the action
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
