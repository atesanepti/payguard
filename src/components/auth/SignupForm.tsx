"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import ErrorMessage from "../alert/ErrorMessage";
import SuccessMessage from "../alert/SuccessMessage";

import { signupSchema } from "@/schema";
import { signup } from "@/actions/signup";
import Link from "next/link";

const SignupForm = () => {
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useForm<zod.infer<typeof signupSchema>>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const handleSignup = async (data: zod.infer<typeof signupSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      signup(data).then((res) => {
        if (!res.success && res.redirect) {
          return redirect(res.redirect);
        }
        if (res.error) {
          setError(res.error);
        } else if (res.success) {
          setSuccess(res.success);
          if (res.redirect) {
            setTimeout(() => {
              redirect(res.redirect);
            }, 1000);
          }
        }
      });
    });
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignup)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    disabled={pending}
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={pending}
                    placeholder="Create a password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={pending}
                    placeholder="Confirm password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end mt-2">
            <Link href="/signin" className="text-blue-600 font-semibold ">
              Already have an account?
            </Link>
          </div>

          <ErrorMessage message={error} />
          <SuccessMessage message={success} />
          <Button disabled={pending} className="mt-2 !w-full">
            Signup
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
