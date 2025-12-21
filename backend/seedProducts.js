const mongoose = require("mongoose");
const Product = require("./model/ProductModel");
require("dotenv").config({ path: "/config/.env" });

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const products = [
      {
        name: "Cricket Bat",
        description: "High-quality cricket bat for professionals",
        price: 5000,
        category: "Bats",
        Stock: 10,
        images: [{ public_id: "sample", url: "sample_url" }],
        user: "admin_id", // replace with actual admin id if needed
      },
      {
        name: "Cricket Ball",
        description: "Durable cricket ball",
        price: 200,
        category: "Balls",
        Stock: 50,
        images: [{ public_id: "sample", url: "sample_url" }],
        user: "admin_id",
      },
      {
        name: "Cricket Helmet",
        description: "Protective cricket helmet",
        price: 1500,
        category: "Protective Gear",
        Stock: 20,
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
