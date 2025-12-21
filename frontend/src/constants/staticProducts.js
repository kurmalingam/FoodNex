import img1 from '../Image/products/Moringa powder drumstick.png';
import img2 from '../Image/products/pure curry leaf powder.png';
import img3 from '../Image/products/Sambar Powder.png';
import img4 from '../Image/products/SiruKeerai rice mix.png';
import img5 from '../Image/products/GarlicRice mix.png';
import img6 from '../Image/products/paruppu podi.png';
import img7 from '../Image/products/Pirandai veldt grape rice mix.png';
import img8 from '../Image/products/nellikkai gooseberry rice mix.png';
import img9 from '../Image/products/Moringa soup.png';
import img10 from '../Image/products/nellikkai soup mix powder.png';
import img11 from '../Image/products/banana stem soup mix powder.png';
import img12 from '../Image/products/Avarampoo soup mix.png';
import img13 from '../Image/products/Pure gooseberry powder.png';
import img14 from '../Image/products/Pure avarampoo powder.png';
import img15 from '../Image/products/kariveppilai powder.png';

const products = [
  // 🌿 PODI
  {
    _id: "1",
    name: "Murungai Idly/Rice Podi",
    category: "Podi",
    price: 40,
    price50: "₹40 (50 gms)",
    price100: "₹60 (100 gms)",
    price50Num: 40,
    price100Num: 60,
    stock: true,
    images: [{ url: img1 }],
    description: "Nutritious moringa powder for idly and rice, packed with vitamins and minerals.",
  },
  {
    _id: "2",
    name: "Karuvepillai Idly/Rice Podi",
    category: "Podi",
    price: 40,
    price50: "₹40 (50 gms)",
    price100: "₹60 (100 gms)",
    price50Num: 40,
    price100Num: 60,
    stock: true,
    images: [{ url: img2 }],
    description: "Aromatic curry leaf powder perfect for enhancing the flavor of your dishes.",
  },
  {
    _id: "3",
    name: "Sambar Podi",
    category: "Podi",
    price: 40,
    price50: "₹40 (50 gms)",
    price100: "₹60 (100 gms)",
    price50Num: 40,
    price100Num: 60,
    stock: true,
    images: [{ url: img3 }],
    description: "Traditional sambar powder for authentic South Indian sambar.",
  },

  // 🍚 RICE MIX
  {
    _id: "4",
    name: "Seerukeerai Rice Mix",
    category: "Rice Mix",
    price: 65,
    price50: "₹65 (50 gms)",
    price100: "₹110 (100 gms)",
    price50Num: 65,
    price100Num: 110,
    stock: true,
    images: [{ url: img4 }],
    description: "Healthy spinach rice mix for a nutritious meal.",
  },
  {
    _id: "5",
    name: "Poondu Rice Mix",
    category: "Rice Mix",
    price: 50,
    price50: "₹50 (50 gms)",
    price100: "₹100 (100 gms)",
    price50Num: 50,
    price100Num: 100,
    stock: true,
    images: [{ url: img5 }],
    description: "Garlic-infused rice mix for a flavorful twist.",
  },
  {
    _id: "6",
    name: "Paruppu Rice Mix",
    category: "Rice Mix",
    price: 50,
    price50: "₹50 (50 gms)",
    price100: "₹80 (100 gms)",
    price50Num: 50,
    price100Num: 80,
    stock: true,
    images: [{ url: img6 }],
    description: "Dal rice mix for a protein-rich meal.",
  },
  {
    _id: "7",
    name: "Perandai Rice Mix",
    category: "Rice Mix",
    price: 60,
    price50: "₹60 (50 gms)",
    price100: "₹110 (100 gms)",
    price50Num: 60,
    price100Num: 110,
    stock: true,
    images: [{ url: img7 }],
    description: "Medicinal veldt grape rice mix for health benefits.",
  },
  {
    _id: "8",
    name: "Nellikai Rice Mix",
    category: "Rice Mix",
    price: 65,
    price50: "₹65 (50 gms)",
    price100: "₹110 (100 gms)",
    price50Num: 65,
    price100Num: 110,
    stock: true,
    images: [{ url: img8 }],
    description: "Gooseberry rice mix for antioxidant-rich meals.",
  },

  // 🍵 SOUP MIX
  {
    _id: "9",
    name: "Murungai Soup Mix (16 Soups)",
    category: "Soup Mix",
    price: 85,
    price50: "₹85 (16 Soups)",
    price100: null,
    stock: true,
    images: [{ url: img9 }],
    description: "Moringa soup mix for 16 servings of nutritious soup.",
  },
  {
    _id: "10",
    name: "Nellikai Soup Mix (13 Soups)",
    category: "Soup Mix",
    price: 85,
    price50: "₹85 (13 Soups)",
    price100: null,
    stock: true,
    images: [{ url: img10 }],
    description: "Gooseberry soup mix for 13 servings of healthy soup.",
  },
  {
    _id: "11",
    name: "Banana Stem Soup Mix (13 Soups)",
    category: "Soup Mix",
    price: 85,
    price50: "₹85 (13 Soups)",
    price100: null,
    stock: true,
    images: [{ url: img11 }],
    description: "Banana stem soup mix for 13 servings of detoxifying soup.",
  },
  {
    _id: "12",
    name: "Avaram Poo Soup Mix (16 Soups)",
    category: "Soup Mix",
    price: 110,
    price50: "₹110 (16 Soups)",
    price100: null,
    stock: true,
    images: [{ url: img12 }],
    description: "Neem flower soup mix for 16 servings of medicinal soup.",
  },

  // 🌼 POWDER
  {
    _id: "13",
    name: "Pure Nellikai Powder",
    category: "Powder",
    price: 65,
    price50: "₹65 (50 gms)",
    price100: "₹110 (100 gms)",
    price50Num: 65,
    price100Num: 110,
    stock: true,
    images: [{ url: img13 }],
    description: "Pure gooseberry powder for health and wellness.",
  },
  {
    _id: "14",
    name: "Pure Avaram Poo Powder",
    category: "Powder",
    price: 90,
    price50: "₹90 (50 gms)",
    price100: "₹170 (100 gms)",
    price50Num: 90,
    price100Num: 170,
    stock: true,
    images: [{ url: img14 }],
    description: "Pure neem flower powder for medicinal uses.",
  },
  {
    _id: "15",
    name: "Pure Karuvepillai Powder",
    category: "Powder",
    price: 50,
    price50: "₹50 (50 gms)",
    price100: "₹100 (100 gms)",
    price50Num: 50,
    price100Num: 100,
    stock: true,
    images: [{ url: img15 }],
    description: "Pure curry leaf powder for culinary and health benefits.",
  },
];

export default products;
