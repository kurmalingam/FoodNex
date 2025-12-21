const mongoose = require("mongoose");
const userModel = require("./model/userModel");
require("dotenv").config({ path: "/config/.env" });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const adminData = {
      name: "Admin User",
      email: "admin@gmail.com",
      password: "admin@123",
      role: "admin",
    };

    const existingAdmin = await userModel.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log("Admin user already exists");
    } else {
      await userModel.create(adminData);
      console.log("Admin user created successfully");
    }

    process.exit();
  } catch (error) {
    console.error("Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
