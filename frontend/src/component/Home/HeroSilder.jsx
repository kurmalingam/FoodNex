import React, {
  useState,
  memo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Button,
  Typography,
  Skeleton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= SLIDES ================= */
const slides = [
  {
    image: require("../../Image/FoodNex/slide1.png"),
    title: "Nourish Your Life",
    subtitle: "Premium Dry Foods",
    text: "Get up to 50% off on healthy dry foods",
    btn: "Shop Now",
  },
  {
    image: require("../../Image/FoodNex/slide2.png"),
    title: "Quality You Trust",
    subtitle: "Limited Time Offer",
    text: "Upgrade your pantry with premium products",
    btn: "Buy Now",
  },
  {
    image: require("../../Image/FoodNex/slide3.png"),
    title: "Fresh & Healthy",
    subtitle: "New Arrivals",
    text: "Explore the latest dry food collection",
    btn: "Explore",
  },
  {
    image: require("../../Image/FoodNex/slide4.png"),
    title: "Elevate Your Meals",
    subtitle: "Pro Collection",
    text: "Enhance your cooking with premium ingredients",
    btn: "Upgrade Now",
  },
];

/* ================= SLIDE COMPONENT ================= */
const Slide = memo(({ slide, isFirst }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box sx={{ height: "90vh", position: "relative" }}>
      {/* Skeleton Loader */}
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", inset: 0 }}
        />
      )}

      {/* Image */}
      <Box
        component="img"
        src={slide.image}
        alt={slide.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: loaded ? "block" : "none",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            position: "absolute",
            top: 0,
            left: "15%",
            transform: "translateX(-50%)",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 3, md: 10 },
            maxWidth: 600,
            color: "#fff",
          }}
        >
          <Typography variant="overline" sx={{ letterSpacing: 3 }}>
            {slide.subtitle}
          </Typography>

          {/* SEO: H1 only once */}
          {isFirst ? (
            <Typography variant="h2" component="h1" fontWeight="bold">
              {slide.title}
            </Typography>
          ) : (
            <Typography variant="h3" fontWeight="bold">
              {slide.title}
            </Typography>
          )}

          <Typography sx={{ my: 2 }}>{slide.text}</Typography>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: 30, px: 4 }}
            >
              {slide.btn}
            </Button>
          </Link>
        </Box>
      </AnimatePresence>
    </Box>
  );
});

/* ================= HERO SLIDER ================= */
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const sliderRef = useRef(null);

  /* 🔥 IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    []
  );

  const handlePrev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  return (
    <Box ref={sliderRef} sx={{ position: "relative" }}>
      <Carousel
        autoPlay={inView}
        animation="fade"
        interval={5000}
        indicators={false}
        navButtonsAlwaysVisible={false}
        index={index}
        onChange={(i) => setIndex(i)}
      >
        {slides.map((slide, i) => (
          <Slide key={i} slide={slide} isFirst={i === 0} />
        ))}
      </Carousel>

      {/* Custom Navigation Buttons */}
      <Button
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          minWidth: "50px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(227, 6, 5, 0.8)",
          color: "#fff",
          border: "1px solid rgba(227, 6, 5, 0.8)",
          boxShadow: "0 2px 8px rgba(227, 6, 5, 0.3)",
          zIndex: 20,
          "&:hover": {
            backgroundColor: "rgba(227, 6, 5, 1)",
            boxShadow: "0 4px 12px rgba(227, 6, 5, 0.4)",
          },
          "&:focus": {
            outline: "2px solid #fff",
            outlineOffset: "2px",
          },
        }}
        aria-label="Previous slide"
      >
        <ArrowBackIosIcon sx={{ fontSize: 24, marginLeft: "4px" }} />
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          minWidth: "50px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(227, 6, 5, 0.8)",
          color: "#fff",
          border: "1px solid rgba(227, 6, 5, 0.8)",
          boxShadow: "0 2px 8px rgba(227, 6, 5, 0.3)",
          zIndex: 20,
          "&:hover": {
            backgroundColor: "rgba(227, 6, 5, 1)",
            boxShadow: "0 4px 12px rgba(227, 6, 5, 0.4)",
          },
          "&:focus": {
            outline: "2px solid #fff",
            outlineOffset: "2px",
          },
        }}
        aria-label="Next slide"
      >
        <ArrowForwardIosIcon sx={{ fontSize: 24 }} />
      </Button>

      {/* Custom Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            whileHover={{ scale: 1.3 }}
            onClick={() => setIndex(i)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor:
                index === i ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

