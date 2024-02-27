import React from "react";
import LoginForm from "./loginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col bg-emerald-700 w-full h-[800svh]">
      <div className="absolute w-full h-[20svh] top-60">
        <LoginForm />
      </div>
    </div>
  );
}
