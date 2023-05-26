import User from "../model/userModal.js";
import sequelize from "./connection.js";

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

User.sync(); // Sync the User model with the database

connectToDatabase();
