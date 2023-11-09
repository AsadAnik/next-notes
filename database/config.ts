import mongoose from "mongoose";

/**
 * ---- Connecting to Database ----
 */
const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.DATABASE_URI!);
        console.log(' ---- Database is Connected! ---- ');

    } catch (error) {
        console.log("Error Databse Connection: ", error);
        process.exit(1);
    }
}

export default connectDB;