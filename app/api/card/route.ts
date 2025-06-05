import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Card from "@/models/Card";

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    
    console.log("✅ Database connected successfully for cards");

    const cards = await Card.find();
    // console.log("✅ Fetched cards:", cards);

    if (!cards.length) {
      console.log("❌ No cards found in the database.");
      return NextResponse.json({ message: "No cards found in the database." }, { status: 404 });
    }

    return NextResponse.json(cards, { status: 200 });

  } catch (error) {
    console.error("❌ Error fetching cards:", error);
    return NextResponse.json({ error: "Failed to fetch card data" }, { status: 500 });
  }
}