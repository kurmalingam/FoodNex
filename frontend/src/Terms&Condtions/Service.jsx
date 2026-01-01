import React from "react";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { LocalShipping, Security, LocalOffer, CreditCard } from "@mui/icons-material";

// ==================== STYLES ====================
const useStyles = makeStyles(() => ({
  Services_section: {
    backgroundColor: "#0F0F1A",
    padding: "2rem 1rem", // smaller section
    fontFamily: "'Roboto', sans-serif",
  },
  Services_wrapper: {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "1200px",
  gap: "1rem",
},
  Services_card: {
    display: "flex",
    alignItems: "center", // vertical center
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    padding: "1rem", // smaller padding
    border: "1px solid rgba(255, 255, 255, 0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(227, 6, 5, 0.35)",
      transform: "translateY(-4px)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.35)",
    },
  },
  Services_iconWrapper: {
    minWidth: "40px",
    minHeight: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(227, 6, 5, 0.15)",
    marginRight: "0.8rem",
    transition: "all 0.3s ease",
  },
  Services_icon: {
    color: "#E30605",
    fontSize: "1.4rem !important", // smaller icon
  },
  Services_content: {
    flex: 1,
  },
  Services_cardTitle: {
    color: "#FFFFFF",
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 600,
    fontSize: "0.95rem", // smaller title
    marginBottom: "0.2rem",
    letterSpacing: "0.2px",
  },
  Services_cardInfo: {
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: 400,
    fontSize: "0.8rem", // smaller info
    lineHeight: 1.4,
  },
  "@media (max-width: 768px)": {
    Services_wrapper: {
      flexWrap: "wrap",
      gap: "0.8rem",
    },
    Services_card: {
      padding: "0.8rem",
    },
    Services_iconWrapper: {
      width: "35px",
      height: "35px",
      marginRight: "0.5rem",
    },
    Services_icon: {
      fontSize: "1.2rem !important",
    },
    Services_cardTitle: {
      fontSize: "0.85rem",
    },
    Services_cardInfo: {
      fontSize: "0.75rem",
    },
  },
  "@media (max-width: 480px)": {
    Services_wrapper: {
      flexDirection: "column",
      gap: "0.5rem",
    },
    Services_card: {
      padding: "0.6rem",
    },
    Services_iconWrapper: {
      width: "30px",
      height: "30px",
      marginRight: "0.5rem",
    },
    Services_icon: {
      fontSize: "1rem !important",
    },
    Services_cardTitle: {
      fontSize: "0.8rem",
    },
    Services_cardInfo: {
      fontSize: "0.7rem",
    },
  },
}));

// ==================== DATA ====================
const servicesData = [
  {
    id: 1,
    icon: <LocalShipping fontSize="large"/>,
    title: "Express Delivery",
    info: "Ships within 24 Hours",
  },
  {
    id: 2,
    icon: <Security fontSize="large"/>,
    title: "Products Authenticity",
    info: "100% Original",
  },
  {
    id: 3,
    icon: <LocalOffer fontSize="large"/>,
    title: "Exciting Deals",
    info: "On all orders",
  },
  {
    id: 4,
    icon: <CreditCard fontSize="large"/>,
    title: "Secure Payments",
    info: "SSL Certified",
  },
];

// ==================== ANIMATIONS ====================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ==================== COMPONENT ====================
const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.Services_section}>
      <motion.div
        className={classes.Services_wrapper}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {servicesData.map((item) => (
          <motion.div
            className={classes.Services_card}
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className={classes.Services_iconWrapper}
              whileHover={{ scale: 1.1 }}
            >
              <div className={classes.Services_icon}>{item.icon}</div>
            </motion.div>
            <div className={classes.Services_content}>
              <div className={classes.Services_cardTitle}>{item.title}</div>
              <div className={classes.Services_cardInfo}>{item.info}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
