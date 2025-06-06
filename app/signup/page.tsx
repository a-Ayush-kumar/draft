"use client";
import { use, useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setPending(false);
      toast.success("Account created successfully!", data.message);
      router.push("/login");
    } else if (res.status === 400) {
      setPending(false);
      setError(data.message);
      toast.error("Error creating account", data.message);
    } else if (res.status === 500) {
      setPending(false);
      setError(data.message);
      toast.error("Server error", data.message);
    }
  };

  return (
    <div className="h-[75vh] flex-col flex items-center justify-center bg-[#031e2b]">
      <Card className="w-[400px] p-6 bg-[#FAF3E3] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-[#3E423A]">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center text-[#3E423A]">
            Create your account to get started
          </CardDescription>
          
          <CardContent className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                disabled={pending}
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                className="w-full bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B572A]"
              />
              <Input
                type="email"
                placeholder="Email Address"
                disabled={pending}
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                className="w-full bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B572A]"
              />
              <Input
                type="password"
                placeholder="Password"
                disabled={pending}
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                className="w-full bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B572A]"
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                disabled={pending}
                value={form.confirmPassword}
                onChange={(e) => {
                  setForm({ ...form, confirmPassword: e.target.value });
                }}
                className="w-full bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B572A]"
              />
              <Button
                type="submit"
                disabled={pending}
                className="w-full bg-[#8B572A] text-white font-bold py-2 px-4 rounded hover:bg-[#6f4429]"
              >
                Sign Up
              </Button>
            </form>
            <Separator className="my-4" />
            <div className="flex my-2 justify-evenly mx-auto items-center">
              <Button
                variant="outline"
                className=" bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 hover:bg-[#FAF3E3]"
              >
                <FaGoogle className="size-8 left-2.5 top-2.5" />
              </Button>
              <Button
                variant="outline"
                className=" bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 hover:bg-[#FAF3E3]"
              >
                <FaFacebook className="size-8 left-2.5 top-2.5" />
              </Button>
            </div>
            <p className="text-center text-[#3E423A] mt-4">
              Already have an account?
              <Link
                href="/login"
                className="text-[#8B572A] font-semibold hover:underline"
              >
                {" "}
                Log In
              </Link>
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}

export default SignUp;
