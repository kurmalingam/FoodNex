import React, { useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import { useRouteMatch } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InventoryIcon from "@mui/icons-material/Inventory";





import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import staticProducts from "../../constants/staticProducts";

const categories = [
  "All",
  "Podi",
  "Rice Mix",
  "Soup Mix",
  "Powder",
];

function Products() {
  const match = useRouteMatch();
  let keyword = match.params.keyword;
  const dispatch = useDispatch();
  const alert = useAlert();

  const [allProducts, setAllProducts] = useState(staticProducts);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [price, setPrice] = React.useState([0, 150]); // initial limit from min=0 to max=100
  const [selectedCategories, setSelectedCategories] = React.useState(["All"]);

  const itemsPerPage = 9;

  useEffect(() => {
    let filteredProducts = staticProducts;

    // Filter by keyword
    if (keyword) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    // Filter by price
    filteredProducts = filteredProducts.filter(product =>
      product.price >= price[0] && product.price <= price[1]
    );

    // Filter by category
    if (!selectedCategories.includes("All")) {
      filteredProducts = filteredProducts.filter(product =>
        selectedCategories.includes(product.category)
      );
    }



    setAllProducts(filteredProducts);
    setCurrentPage(1); // Reset to first page when filters change
  }, [keyword, price, selectedCategories]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProducts(allProducts.slice(startIndex, endIndex));
  }, [allProducts, currentPage]);

  const setCurrentPageNoHandler = (e) => {
    setCurrentPage(e); // e is the clicked page value
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const handleCategoryChange = (category) => {
    if (category === "All") {
      if (selectedCategories.includes("All")) {
        // Uncheck "All" and select all other categories
        setSelectedCategories(categories.filter(cat => cat !== "All"));
      } else {
        // Check "All" and uncheck all others
        setSelectedCategories(["All"]);
      }
    } else {
      let newSelectedCategories = [...selectedCategories];

      if (newSelectedCategories.includes(category)) {
        // Remove the category
        newSelectedCategories = newSelectedCategories.filter(cat => cat !== category);
      } else {
        // Add the category
        newSelectedCategories.push(category);
        // Remove "All" if it was selected
        newSelectedCategories = newSelectedCategories.filter(cat => cat !== "All");
      }

      // If no categories are selected, select "All"
      if (newSelectedCategories.length === 0) {
        newSelectedCategories = ["All"];
      }

      setSelectedCategories(newSelectedCategories);
    }
  };





 

  return (
    <>
      <MetaData title="PRODUCTS --Ecart" />
      {products === undefined || products.length === 0 ? (
            <>
              <div
                className="emptyCartContainer "
                style={{ marginTop: "5rem", background: "white" }}
              >
                <InventoryIcon className="cartIcon" />

                <Typography variant="h5" component="h1" className="cartHeading">
                  Product Not Found
                </Typography>
                <Typography variant="body" className="cartText">
                  Nothin' to see here.
                </Typography>
                <Typography variant="body" className="cartText">
                  There is no product with this name
                </Typography>

                <Button
                  className="shopNowButton"
                  onClick={() => window.location.reload()}
                  style={{ width: "7rem" }}
                >
                  Refresh
                </Button>
              </div>
            </>
          ) : (
            <div className="productPage">
              <div className="prodcutPageTop">
                <div className="filterBox">
                  {/* Price */}
                  <div className="priceFilter">
                    <Typography
                      style={{
                        fontSize: "18px",
                        padding: "5px",
                        fontWeight: 700,
                        color: "#414141",
                      }}
                    >
                      Price
                    </Typography>
                    <div className="priceSlider">
                      <Slider
                        value={price}
                        onChange={priceHandler}
                        min={0}
                        max={150}
                        step={5}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                      />
                    </div>
                    <div className="priceSelectors">
                      <div className="priceSelector">
                        <Select
                          value={price[0]}
                          onChange={(e) =>
                            setPrice([+e.target.value, price[1]])
                          }
                          className="priceOption"
                          IconComponent={ArrowDropDownIcon}
                          renderValue={(selected) =>
                            selected !== "" ? selected : "min"
                          } // Display "min" as default label
                        >
                          <MenuItem value={0} className="menu_item">
                            0
                          </MenuItem>
                          <MenuItem value={25} className="menu_item">
                            25
                          </MenuItem>
                          <MenuItem value={50} className="menu_item">
                            50
                          </MenuItem>
                          <MenuItem value={75} className="menu_item">
                            75
                          </MenuItem>
                        </Select>
                        <span className="toText">to</span>
                        <Select
                          value={price[1]}
                          onChange={(e) =>
                            setPrice([price[0], +e.target.value])
                          }
                          className="priceOption"
                          IconComponent={ArrowDropDownIcon}
                          renderValue={(selected) =>
                            selected !== "" ? selected : "max"
                          }
                        >
                          <MenuItem value={50} className="menu_item">
                            50
                          </MenuItem>
                          <MenuItem value={75} className="menu_item">
                            75
                          </MenuItem>
                          <MenuItem value={100} className="menu_item">
                            100
                          </MenuItem>
                          <MenuItem value={150} className="menu_item">
                            150
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="filter_divider"></div>

                  {/* Categories */}
                  <div className="categoriesFilter">
                    <Typography
                      style={{
                        fontSize: "18px",
                        padding: "10px",
                        fontWeight: 700,
                        color: "#414141",
                      }}
                    >
                      Categories
                    </Typography>
                    <ul className="categoryBox">
                      {categories.map((category, index) => (
                        <li className="category-link" key={index}>
                          <label
                            htmlFor={`category-${index}`}
                            className="category-label"
                          >
                            <input
                              type="checkbox"
                              id={`category-${index}`}
                              className="category-checkbox"
                              value={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="filter_divider"></div>
                  {/* Clear Filters */}
                </div>

                <div
                  className={products.length < 2 ? "products1" : "products"}
                >
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              </div>

              {/* Pagination */}
       
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={allProducts.length}
                    onChange={setCurrentPageNoHandler}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="First"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
             
            </div>
          )}
    </>
  );
}

export default Products;
