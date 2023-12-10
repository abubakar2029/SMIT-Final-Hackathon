"use client";

import "material-icons/iconfont/material-icons.css";

import React from "react";
import axios from "axios"; // You may need to install axios if not already installed
import { useForm } from "react-hook-form";

const PatientRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to your backend or API
      const response = await axios.post("/api/registerPatient", data);
      console.log(response.data);
    } catch (error) {
      console.error("Error registering patient:", error);
    }
  };

  return (
    <section className="flex justify-center py-12 w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white text-black">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="py-2 my-3 text-[18px] font-medium bg-teal-200 text-center rounded">
          New Patient Registration
        </h1>
        {/* TODAY_DATE */}
        <div className="mt-6">
          <label
            htmlFor="contactDetails"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Today's Date
          </label>
          <div className="flex items-center justify-between flex-wrap">
            {/* MONTH */}
            <div>
              <input
                type="number"
                id="contactDetails"
                {...register("contactDetails", { required: true })}
                className={`px-2 py-1.5 border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded w-40`}
                placeholder="Month"
              />
            </div>
            {/* Day */}
            <div>
              <input
                type="number"
                id="contactDetails"
                {...register("contactDetails", { required: true })}
                className={`px-2 py-1.5 border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded !w-24 `}
                placeholder="Day"
              />
            </div>
            {/* YEAR */}
            <div>
              <input
                type="number"
                id="contactDetails"
                {...register("contactDetails", { required: true })}
                className={`px-2 py-1.5 border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded !w-28 `}
                placeholder="year"
              />
            </div>
            <span>
              <i className="material-icons">calendar_month</i>
            </span>
          </div>
        </div>
        {/* Full_Name */}
        <div className="flex flex-wrap -mx-3 mb-6 mt-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className={`px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Alice Smith"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        {/* Contact_details */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Contact Details
            </label>
            <input
              type="email"
              id="contactDetails"
              {...register("contactDetails", { required: true })}
              className={`px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded ${
                errors.contactDetails ? "border-red-500" : ""
              }`}
              placeholder="alice@example.com"
            />
            {errors.contactDetails && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
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
              className="px-2 py-1.5 w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        {/* Medical_History */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="medicalHistory"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Enter a strongPassword
            </label>
            <textarea
              id="medicalHistory"
              {...register("medicalHistory", { required: true })}
              className={`px-2 flex items-start w-full border-[0.5px] bg-gray-100 focus:bg-white text-black text-[14px] focus:outline-none focus:border-black rounded${
                errors.medicalHistory ? "border-red-500" : ""
              }`}
              placeholder="Previous surgery in 2018"
            />
            {errors.medicalHistory && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Register Patient
        </button>
      </form>
    </section>
  );
};

export default PatientRegistration;
