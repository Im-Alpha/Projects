import React from "react";
import RegistrationForm from "./registrationForm";

export default async function Register() {
  return (
    <div className="flex flex-col bg-emerald-700 w-full h-[800svh]">
      <div className="absolute w-full h-[20svh] top-60">
        <RegistrationForm />
      </div>
    </div>
  );
}
