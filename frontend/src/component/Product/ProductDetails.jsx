import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useRouteMatch } from "react-router-dom";
import { useAlert } from "react-alert";

import { dispalyMoney } from "../DisplayMoney/DisplayMoney";
import ReviewCard from "./ReviewCard";
import MetaData from "../layouts/MataData/MataData";
import CricketBallLoader from "../layouts/loader/Loader";
import staticProducts from "../../constants/staticProducts";

import "./ProductDetails.css";

const ProductDetails = () => {
  const match = useRouteMatch();
  const alert = useAlert();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = staticProducts.find(
      (p) => p._id === match.params.id
    );

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      alert.error("Product not found");
    }
    setLoading(false);
  }, [match.params.id, alert]);

  if (loading) {
    return <CricketBallLoader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const newPrice = dispalyMoney(product.price);

  return (
    <div className="productDetailsContainer">
      <MetaData title={product.name} />

      <section id="product_details" className="section">
        <div className="product_container">
          <div className="wrapper prod_details_wrapper">

            {/* Left */}
            <div className="prod_details_left_col">
              <figure className="prod_details_img">
                <img src={product.images[0].url} alt={product.name} />
              </figure>
            </div>

            {/* Right */}
            <div className="prod_details_right_col">
              <h1 className="prod_details_title">{product.name}</h1>

              {product.info && (
                <h4 className="prod_details_info">{product.info}</h4>
              )}

              <div className="prod_details_price">
                <div className="price_box">
                  <h2 className="price">{newPrice}</h2>
                  <span className="tax_txt">(Inclusive of all taxes)</span>
                </div>

                <div className="badge">
                  {product.stock >= 1 ? (
                    <span className="instock">
                      <DoneIcon fontSize="large" /> In Stock
                    </span>
                  ) : (
                    <span className="outofstock">
                      <CloseIcon fontSize="large" /> Out of stock
                    </span>
                  )}
                </div>
              </div>

              <div className="seprator2"></div>

              <div className="productDescription">
                <div className="productDescription_text">
                  <h4>Description :</h4>
                  <p>{product.description}</p>
                </div>

                <div className="deliveryText">
                  <LocalShippingOutlinedIcon fontSize="large" />
                  We deliver! Just say when and how.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="reviewCard">
        <ReviewCard product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
