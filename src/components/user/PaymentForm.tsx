"use client";
import React, { useState, useTransition } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { paymentSchema } from "@/schema/index";
import zod from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import SuccessMessage from "../alert/SuccessMessage";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

const PaymentForm = () => {
  const [pending, startPending] = useTransition();
  const [success, setSuccess] = useState("");
  const form = useForm<zod.infer<typeof paymentSchema>>({
    defaultValues: {
      title: "",
      amount: "",
    },
    resolver: zodResolver(paymentSchema),
  });

  const handleRequest = (data: zod.infer<typeof paymentSchema>) => {
    setSuccess("");
    startPending(() => {
      axios
        .post("api/user/payment", data)
        .then(() => {
          setSuccess("Payment successfull submited");
        })
        .catch(() => {
          return redirect("/error");
        });
    });
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRequest)}>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>TItle</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    disabled={pending}
                    placeholder="Enter payment title"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="amount"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    disabled={pending}
                    placeholder="$00"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SuccessMessage message={success} />
          <Button disabled={pending} className="mt-2 !w-full">
            Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
