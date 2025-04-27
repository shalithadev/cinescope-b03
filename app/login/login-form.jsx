"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
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
import { signIn } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

// Client Component for CSR
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

    // Continue the submission only if form is valid
    if (validateForm({ email, password })) {
      setLoading(true);
      await signIn.email(
        { email, password },
        {
          onSuccess: () => {
            redirect("/dashboard");
          },
          onError: (ctx) => {
            setError({ error: true, message: ctx.error.message });
            setLoading(false);
          },
        }
      );
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              {/* error section */}
              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-600 text-xs text-center animate-pulse duration-800">
                    {error.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <Loader2 className="animate-spin" />} Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled={isLoading}
                >
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
