import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Customer from "@/models/Customer";

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    
    console.log("✅ Database connected successfully");

    const customers = await Customer.find();
    // console.log("✅ Fetched customers:", customers);

    if (!customers.length) {
      console.log("❌ No customers found in the database.");
      return NextResponse.json({ message: "No customers found in the database." }, { status: 404 });
    }

    return NextResponse.json(customers, { status: 200 });

  } catch (error) {
    console.error("❌ Error fetching customers:", error);
    return NextResponse.json({ error: "Failed to fetch customer data" }, { status: 500 });
  }
}

