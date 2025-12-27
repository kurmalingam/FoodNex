import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartAction";
import { Typography, Button } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import {
  dispalyMoney,
} from "../DisplayMoney/DisplayMoney";
const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    console.log('increaseQuantity called with id:', id, 'quantity:', quantity, 'stock:', stock);
    // Temporarily remove stock check to test if + works
    // if (stock <= quantity) {
    //   console.log('not increasing because stock <= quantity');
    //   return;
    // }
    const item = cartItems.find(item => item.productId === id);
    if (item) {
      console.log('found item, dispatching addItemToCart');
      dispatch(addItemToCart({
        _id: id,
        name: item.name,
        price: item.price,
        price50Num: item.price50,
        price100Num: item.price100,
        images: [{url: item.image}],
        stock: item.stock
      }, 1));
    } else {
      console.log('item not found');
    }
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity <= 1) return;
    const item = cartItems.find(item => item.productId === id);
    if (item) {
      dispatch(addItemToCart({
        _id: id,
        name: item.name,
        price: item.price,
        price50Num: item.price50,
        price100Num: item.price100,
        images: [{url: item.image}],
        stock: item.stock
      }, -1));
    }
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const checkoutHandler = () => {
   
    history.push("/login?redirect=/shipping");
  };

  // calculate price without discount
  let totalPrice = cartItems.reduce(
    (acc, item) => {
      const num100 = Math.floor(item.quantity / 2);
      const num50 = item.quantity % 2;
      return acc + num100 * (item.price100 || item.price * 2) + num50 * (item.price50 || item.price);
    },
    0
  );
  let final = totalPrice;
  final = dispalyMoney(final);
  totalPrice = dispalyMoney(totalPrice);

  return (
    <>
      <div className="cartPage">
  <MetaData title="Your Cart" />  
        <div className="cart_HeaderTop">
          <div className="headerLeft">
            <Typography variant="h5" component="h1" className="cartHeading">
              Shopping Cart
            </Typography>
            <Typography variant="body2" className="cartText3">
              TOTAL ({cartItems.length} item) <b>{final}</b>
            </Typography>
          </div>
          <Typography
            variant="body2"
            className="cartText2"
            onClick={() => history.push("/products")}
          >
            Continue Shopping
          </Typography>
        </div>

        <div className="separator_cart2"></div>

        {cartItems.length === 0 ? (
          <div className="emptyCartContainer">
            <RemoveShoppingCartIcon className="cartIcon" />

            <Typography variant="h5" component="h1" className="cartHeading">
              Your Shopping Cart is Empty
            </Typography>
            <Typography variant="body" className="cartText">
              Nothin' to see here.
            </Typography>
            <Typography variant="body" className="cartText">
              Let's get shopping!
            </Typography>
            <Link to="/products">
              <Button className="shopNowButton">Shop Now</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart_content_wrapper">
              <div className="cart_left_container">
                {cartItems &&
                  cartItems.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      deleteCartItems={deleteCartItems}
                      decreaseQuantity={decreaseQuantity}
                      increaseQuantity={increaseQuantity}
                      length={cartItems.length}
                    />
                  ))}
              </div>

              <div className="separator_cart3"></div>
              <div className="cart_right_container">
                <div className="order_summary">
                  <h4>
                    Order Summary &nbsp; ( {cartItems.length}{" "}
                    {cartItems.length > 1 ? "items" : "item"} )
                  </h4>
                  <div className="order_summary_details">
                    <div className="price order_Summary_Item">
                      <span>Total Price</span>
                      <p>{totalPrice}</p>
                    </div>

                    <div className="delivery order_Summary_Item">
                      <span>Delivery</span>
                      <p>
                        <b>Free</b>
                      </p>
                    </div>

                    <div className="separator_cart"></div>
                    <div className="total_price order_Summary_Item">
                      <div>
                        <h4>Total Price</h4>

                        <p
                          style={{
                            fontSize: "14px",
                            marginTop: "-10px",
                            color: "#414141",
                          }}
                        >
                          (Inclusive of all taxes)
                        </p>
                      </div>
                      <p>
                        <b>{final}</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="separator"></div>

                <Button
                  variant="contained"
                  className="btn-custom"
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>

                <div className="paymentLogoImg">
                  <img
                    src={require("../../Image/cart/cart_img.png")}
                    alt="payemnt-icons"
                    className="paymentImg"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
