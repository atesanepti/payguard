"use client";
import React, { useTransition, useState } from "react";
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

import { signinSchema } from "@/schema";
import { signin } from "@/actions/signin";
const SigninForm = () => {
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useForm<zod.infer<typeof signinSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });

  const handleSignin = async (data: zod.infer<typeof signinSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signin(data).then((res) => {
        if (!res.success && res.redirect) {
          return redirect(res.redirect);
        }
        if (res.success) {
          setSuccess(res.success);
          if (res.redirect) {
            setTimeout(() => {
              redirect(res.redirect);
            }, 1000);
          }
        } else if (res.error) {
          setError(res.error);
        }
      });
    });
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignin)}>
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

          <ErrorMessage message={error} />
          <SuccessMessage message={success} />
          <Button disabled={pending} className="mt-2 !w-full">
            Signin
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
