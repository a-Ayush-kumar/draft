import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  property: String,
  description: String,
});
const Card =  mongoose.models.Card || mongoose.model("Card", cardSchema);
export default Card;