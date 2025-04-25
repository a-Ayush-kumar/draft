import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Review from "@/models/Review";

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    
    console.log("✅ Database connected successfully for reviews");

    const reviews = await Review.find();
    // console.log("✅ Fetched reviews:", reviews);

    if (!reviews.length) {
      console.log("❌ No reviews found in the database.");
      return NextResponse.json({ message: "No reviews found in the database." }, { status: 404 });
    }

    return NextResponse.json(reviews, { status: 200 });

  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch review data" }, { status: 500 });
  }
}
