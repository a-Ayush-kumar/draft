import connectDB from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

interface AuthRequestBody {
  name?: string;
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await connectDB();
    const { name, email, password}: AuthRequestBody = await request.json();

    let user = await User.findOne({ email });

    if (user) {
      // Login functionality
      if (user.password !== password) {
        return NextResponse.json(
          { error: "Invalid email or password" },
          { status: 400 }
        );
      }
      
      // Store login state in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/profile"; // Redirect to profile page
      }

      return NextResponse.json(
        { message: "Login successful!" },
        { status: 200 }
      );
    } else {
      // Signup functionality
      const newUser = new User({ name, email, password});
      await newUser.save();

      return NextResponse.json(
        { message: "Signup successful!", user: newUser },
        { status: 201 }
      );
    }
  } catch (err) {
    console.error("Auth Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
