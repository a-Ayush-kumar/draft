"use client";
import { useEffect, useState } from "react";
import React from "react";
import Slider from "./slider";

interface reviewProps {
  name: string;
  description: string;
  rating: number;
}

export function Feedback() {
  const [review, setReview] = useState<reviewProps[]>([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch("/api/review");
        const data = await response.json();
        setReview(data);
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    fetchReview();
  }, []);

  return (
    <div>
      <Slider>
      {review.map((review, index) => (
        <div
          key={index}
          className="bg-[#F8F1E5] text-[#3E423A] rounded-lg p-4 shadow-md hover:bg-opacity-90"
        >
          <img
            src="/legal2.png"
            alt="Customer 3"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold mb-2">{review.name}</h3>
          <p className="text-lg italic mb-2">{review.description}</p>
          <span className="text-sm font-semibold text-[#8B572A]">
            {Array(review.rating).fill("⭐")}
          </span>
        </div>
      ))}</Slider>
    </div>
  );
}

export function Sdraft() {
  return (
    <div className="flex flex-row gap-4 mt-8">
      <div className="bg-[#F8F1E5] text-[#3E423A] rounded-lg p-4 shadow-md hover:bg-opacity-90">
        <h3 className="text-xl font-bold">Affidavit draft</h3>
        <img
          src="/images/affidavit.png"
          alt="Sample Draft 1"
          className="w-full h-100 object-cover rounded-lg mb-4 shadow-lg"
        />
        <p className="text-sm italic">
          Overview of the first sample draft i.e; draft for affidavit...
        </p>
      </div>

      <div className="bg-[#F8F1E5] text-[#3E423A] rounded-lg p-4 shadow-md hover:bg-opacity-90">
        <h3 className="text-xl font-bold">Abitration draft</h3>
        <img
          src="/images/abitration.png"
          alt="Sample Draft 1"
          className="w-full h-100 object-cover rounded-lg mb-4 shadow-lg"
        />
        <p className="text-sm italic">
          Overview of the first sample draft i.e; draft for abitration...
        </p>
      </div>

      <div className="bg-[#F8F1E5] text-[#3E423A] rounded-lg p-4 shadow-md hover:bg-opacity-90">
        <h3 className="text-xl font-bold">Agreement draft</h3>
        <img
          src="/images/agreeement.png"
          alt="Sample Draft 1"
          className="w-full h-100 object-cover rounded-lg mb-4 shadow-lg"
        />
        <p className="text-sm italic">
          Overview of the first sample draft i.e; draft for agreement...
        </p>
      </div>
    </div>
  );
}
