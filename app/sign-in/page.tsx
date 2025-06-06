"use client";
import React, { useState } from "react";
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
import { signIn } from "next-auth/react";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res) {
      setError("Login failed. Please try again.");
      toast.error("Login failed.");
      setPending(false);
      return;
    }

    if (res.ok) {
      router.push("/profile");
      toast.success("Login successful!");
    } else if (res.status === 401) {
      setError("Invalid email or password");
      toast.error("Invalid email or password");
      setPending(false);
    } else {
      setError("An unexpected error occurred");
      toast.error("An unexpected error occurred");
      setPending(false);
    }
  };

  return (
    <div className=" flex items-center justify-center bg-[#031e2b] h-[75vh] flex-col">
      <Card className="w-[400px] p-6 bg-[#FAF3E3] shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-[#3E423A]">
            Log In
          </CardTitle>
          <CardDescription className="text-center text-[#3E423A]">
            Enter your credentials to log in
          </CardDescription>
          <CardContent className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                disabled={pending}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B572A]"
              />
              <Input
                type="password"
                disabled={pending}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full bg-white text-[#3E423A] border border-[#8B572A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#8B572A]"
              />

              <Button
                disabled={pending}
                type="submit"
                className="w-full bg-[#8B572A] text-white font-bold py-2 px-4 rounded hover:bg-[#6f4429]"
              >
                Log In
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
              Don't have an account?
              <Link
                href="/signup"
                className="text-[#8B572A] font-semibold hover:underline"
              >
                {" "}
                Sign Up
              </Link>
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}

export default SignIn;
