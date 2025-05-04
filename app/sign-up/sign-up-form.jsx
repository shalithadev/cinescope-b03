"use client";

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
import Link from "next/link";
import { EMAIL_REGEX } from "@/lib/constants";
import { signUp } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export function SignUpForm({ className, ...props }) {
  const [error, setError] = useState(DEFAULT_ERROR);

  const validateForm = ({ email, password, confirmPassword }) => {
    if (email === "") {
      setError({
        error: true,
        message: "Email is required",
      });
      return false;
    } else if (password === "") {
      setError({
        error: true,
        message: "Password is required",
      });
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setError({
        error: true,
        message: "Email is invalid",
      });
      return false;
    } else if (password.length < 8) {
      setError({
        error: true,
        message: "Password must be at least 8 characters",
      });
      return false;
    } else if (password !== confirmPassword) {
      setError({
        error: true,
        message: "Passwords do not match",
      });
      return false;
    }
    setError(DEFAULT_ERROR);
    return true;
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    console.log(email, password, confirmPassword);

    if (validateForm({ email, password, confirmPassword })) {
      await signUp.email(
        { email, password, name: "Guest User", image: undefined },
        {
          onRequest: (ctx) => {
            console.log("onRequest", ctx);
          },
          onSuccess: () => {
            // redirect to login
          },
          onError: (ctx) => {
            setError({
              error: true,
              message: ctx.error.message,
            });
            // loading false
          },
        }
      );
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
          <form onSubmit={handleSubmitForm} noValidate>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
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
                  required
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
                  required
                  autoComplete="new-password"
                />
              </div>
              {/* Error Message Here */}
              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-600 text-xs text-center animate-pulse duration-700">
                    {error.message}
                  </span>
                )}
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
