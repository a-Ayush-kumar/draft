import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/mongoose';

export async function POST(request: Request) {
    const {name, email,password, confirmPassword} = await request.json();
    const isValidEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if (!name || !email || !password || !confirmPassword) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    
    if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    if (password !== confirmPassword) {
        return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }
    if (password.length < 6) {
        return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
    }

    try {
        await connectDB();
        const existingUser = await User.findOne({ email});
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        }); 
        await newUser.save();
        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}
catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}