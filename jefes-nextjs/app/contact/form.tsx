"use client";
import React from "react";

const Form = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      name: String(event.target.message.value),
      email: String(event.target.message.value),
      message: String(event.target.message.value),
    };

    console.log(data);
  }
  return (
    <div className="flex mx-auto justify-center text-2xl p-4 max-w2xl text-black">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col my-4">
          <label className="font-bold" htmlFor="name">
            Name
          </label>
          <input type="text" minLength={3} autoComplete="off" id="name" className="bg-gray-600" />
        </div>
        <div className="w-full flex flex-col my-4">
            <label htmlFor="email">Email</label>
            <input type="text" minLength={4} autoComplete="off" id="email" className="bg-gray-600" />
        </div>
        <textarea id="message" rows={4} placeholder="How can we assist you?" className="flex flex-col my-4 p-10 bg-gray-600"></textarea>
        <button onSubmit={handleSubmit} className="flex flex-col">Submit</button>
        
      </form>
    </div>
  );
};

export default Form;
