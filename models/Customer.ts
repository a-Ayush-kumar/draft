import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Customer =  mongoose.models.Customer || mongoose.model("Customer", customerSchema);
export default Customer;