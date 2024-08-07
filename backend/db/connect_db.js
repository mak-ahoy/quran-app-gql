import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        console.log("connecting to db...");
        const data = await mongoose.connect(process.env.DB_URI)
        console.log("connected sucessfully!")


    }
    catch (error){
        console.log("failed to connect, trying again.")
        connectDB();
    }
}