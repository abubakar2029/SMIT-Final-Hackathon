"use client";

import React from "react";
import { useForm } from "react-hook-form";

function DoctorRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle the form data here
  };

  return (
    <section className="text-black flex justify-center py-12 w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      {/* COMPANY_NAME */}
      <div></div>
      <form
        className="w-full max-w-lg bg-white px-4  md:px-11 py-3 rounded m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="py-2 my-3 text-[18px] font-medium bg-teal-200 text-center rounded">
          Doctor Registration
        </h1>
        {/* Full_Name */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="firstName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("fullName", { required: true })}
              className={`px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded ${
                errors.firstName ? "border-red-500" : ""
              }`}
              placeholder="John Smith"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        {/* Specialization */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="Specialization"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Specialization
            </label>
            <input
              type="text"
              id="password"
              {...register("Specialization")}
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded "
              placeholder="Cardiologist"
            />
          </div>
        </div>
        {/* Contact_Info */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Contact Info
            </label>
            <input
              type="email"
              id="password"
              {...register("email")}
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded "
              placeholder="contact@example.com"
            />
          </div>
        </div>
        {/* PASSWORD */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded "
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        {/* CITY */}
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="city"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded "
              placeholder="Faisalabad"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="state"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              State
            </label>
            <select
              id="state"
              {...register("state")}
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded "
            >
              <option>Punjab</option>
              <option>Sindh</option>
              <option>Balochistan</option>
            </select>
          </div>
          {/* ZIP_CODE */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="zip"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Zip
            </label>
            <input
              type="text"
              id="zip"
              {...register("zip")}
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded "
              placeholder={90210}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </section>
  );
}

export default DoctorRegistration;
