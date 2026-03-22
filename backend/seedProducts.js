const mongoose = require("mongoose");
const Product = require("./model/ProductModel");
require("dotenv").config({ path: "./config/.env" });

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const products = [
      {
        name: "Murungai Idly/Rice Podi",
        description: "Nutritious moringa powder for idly and rice, packed with vitamins and minerals.",
        price: 40,
        category: "Podi",
        stock: true,
        images: [{ public_id: "sample", url: "sample_url" }],
        user: "admin_id", // replace with actual admin id if needed
      },
      {
        name: "Sambar Podi",
        description: "Traditional sambar powder for authentic South Indian sambar.",
        price: 40,
        category: "Podi",
        stock: true,
        images: [{ public_id: "sample", url: "sample_url" }],
        user: "admin_id",
      },
      {
        name: "Karuvepillai Idly/Rice Podi",
        description: "Aromatic curry leaf powder perfect for enhancing the flavor of your dishes.",
        price: 40,
        category: "Podi",
        stock: true,
        images: [{ public_id: "sample", url: "sample_url" }],
        user: "admin_id",
      },
    ];

    await Product.insertMany(products);
    console.log("Products seeded successfully");

    process.exit();
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
