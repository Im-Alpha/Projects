"use client";
import React, { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegistrationForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
  };
  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-20"
      >
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="password" />
        <Button className="bg-blue-500 text-white text-lg">Submit</Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
