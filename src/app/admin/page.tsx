"use client"
import React, { useEffect, useState } from "react";
import { fetchVehicles } from '@/actions/fetchVehicles';
import { Input } from '@nextui-org/react'
import {Select, SelectItem} from "@nextui-org/react";
import { getUserData } from "@/utils/getUser";
import { getAuth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default async function page() {
  // const FormWithSelect = () => {
    // const [formData, setFormData] = useState({
    //   name: '',
    //   email: '',
    //   message: '',
    //   category: '',
    // });
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Process form data here
    //   console.log('Form submitted:', formData);
    // };
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Ride Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name"  className="block text-sm font-medium text-gray-700">
              UserId
            </label>
            <input
              placeholder="Enter UserId"
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="driver" className="block text-sm font-medium text-gray-700">
              DriverId
            </label>
            <input
              type="input"
              placeholder="Enter DriverId"
              id="driver"
              name="driver"
              className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Batch
            </label>
            <select
              id="category"
              name="category"
              className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select category</option>
              <option value="AN">AN</option>
              <option value="FN">FN</option>
            </select>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Going to
            </label>
            <select
              id="category"
              name="category"
              className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select category</option>
              <option value="Home">Home</option>
              <option value="Company">Company</option>
            </select>
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

