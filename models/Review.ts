import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }, 
    // image : { type: String, required: true },
    rating: { type: Number, required: true },
});
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
