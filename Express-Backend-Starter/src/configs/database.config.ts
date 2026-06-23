import mongoose from "mongoose";
import { Env } from "./env.config";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(Env.MONGO_URI);
        console.log("Connected to MongoDB"); 
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        throw new Error("Error connecting to MongoDB");
    }
}