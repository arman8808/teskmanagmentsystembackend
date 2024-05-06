import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connectionInstance = await mongoose.connect(process.env.DB_Url);
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};
export default connectDb;
