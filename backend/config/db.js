import mongoose from "mongoose";

const mongoDBconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);

    console.log(`MONGODB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default mongoDBconnection;
