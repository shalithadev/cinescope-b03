"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { signIn } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export function LoginForm({ className, ...props }) {
  const [isLoading, setLoading] = useState(false);
  // Backend error handling
  const [error, setError] = useState(DEFAULT_ERROR);

  const validateForm = ({ email, password }) => {
    if (email === "") {
      setError({ error: true, message: "Email address cannot be empty" });
      return false;
    } else if (password === "") {
      setError({ error: true, message: "Password cannot be empty" });
      return false;
    }

    setError(DEFAULT_ERROR);
    return true;
  };

  const handleSubmitForm = async (event) => {
    // Prevent default form submission
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    console.log("cred", password, email);

    // Continue the submission only if form is valid
    if (validateForm({ email, password })) {
      // setLoading(true);
      // await signIn.email(
      //   { email, password },
      //   {
      //     onSuccess: () => {
      //       redirect("/dashboard");
      //     },
      //     onError: (ctx) => {
      //       setError({ error: true, message: ctx.error.message });
      //       setLoading(false);
      //     },
      //   }
      // );
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to sign up for an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="sign-up-form" onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  Continue with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
