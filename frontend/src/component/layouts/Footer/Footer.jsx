import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const footMenu = [
  {
    id: 1,
    title: "Help",
    menu: [
      {
        id: 1,
        link: "Track Order",
        path: "/orders",
      },
      {
        id: 2,
        link: "FAQs",
        path: "/terms/conditions",
      },
      {
        id: 3,
        link: "Cancel Order",
        path: "/policy/return",
      },
    ],
  },
  {
    id: 2,
    title: "Policies",
    menu: [
      {
        id: 1,
        link: "Return Policy",
        path: "/policy/return",
      },
      {
        id: 4,
        link: "Privacy Policy",
        path: "/policy/privacy",
      },
      {
        id: 5,
        link: "T&C",
        path: "/terms/conditions",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    menu: [
      {
        id: 1,
        link: "About Us",
        path: "/about",
      },
      {
        id: 2,
        link: "Contact Us",
        path: "/contact",
      },
      {
        id: 4,
        link: "Careers",
        path: "/",
      },
    ],
  },
];

const footSocial = [
  {
    id: 1,
    icon: <FacebookIcon className="social_icon facebook_icon" fontSize="large" />,
    path: "https://www.facebook.com/yourpage", // Replace with actual Facebook URL
  },
  {
    id: 2,
    icon: <TwitterIcon className="social_icon twitter_icon" fontSize="large" />,
    path: "https://twitter.com/Iam_DEv22",
  },
  {
    id: 3,
    icon: <InstagramIcon className="social_icon insta_icon" fontSize="large" />,
    path: "https://www.instagram.com/cricket_weapon_store17",
  },
  {
    id: 4,
    icon: <LinkedInIcon className="social_icon likedin_icon" fontSize="large" />,
    path: "https://www.linkedin.com/in/iam-devesh/",
  },
];

const Footer = () => {
  const [subValue, setSubValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue("");
    alert("Thankyou, you are subscribed to receive our daily newsletter");
  };

  const currYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="wrapper_footer footer_wrapper">
          <div className="foot_about foot1">
            <div className="foot_logo">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src={require("../../../Image/Footer/logo.png")}
                  alt="cricket weapon logo"
                />
                <h1 className="Foot_heading">FoodNex</h1>
              </Link>
            </div>
            <div className="foot_subs">
              <h5>Newsletter</h5>
              <form onSubmit={handleSubmit} className="foot_form">
                <input
                  type="email"
                  className="input_field_footer"
                  placeholder="Email Address*"
                  required
                  value={subValue}
                  onChange={(e) => setSubValue(e.target.value)}
                />
                <p>
                  By submitting your email address you agree to the{" "}
                  <Link to="/terms/conditions" className="foot_subs_text">
                    Terms & Conditions
                  </Link>
                </p>
                <button type="submit" className="btnFooter">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="foot_menu_container">
            {footMenu.map((item) => {
              const { id, title, menu } = item;
              return (
                <div className="foot_menu foot2" key={id}>
                  <h4>{title}</h4>
                  <ul>
                    {menu.map((item) => {
                      const { id, link, path } = item;
                      return (
                        <li key={id}>
                          <Link to={path}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
            <div className="foot_social">
              {footSocial.map((item) => {
                const { id, icon, path } = item;
                return (
                  <a
                    href={path}
                    key={id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
      <div className="separatorFooter"></div>
      <div className="sub_footer_root">
        <div className="container_Footer">
          <div className="sub_footer_wrapper">

            <div className="foot_copyright">
              <p>&copy; {currYear} | FoodNex, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
