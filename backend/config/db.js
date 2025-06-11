import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://premesh:foodiehub10database@cluster0.e2jhmsf.mongodb.net/food-del').then(()=>console.log("DB connected"))
}