"use client";
import { useEffect, useState } from "react";
import React from "react";
import Slider from "./slider";

interface CustomerProps {
  name: string;
  description: string;
}

interface CardProps {
  property: string; 
  description: string;
}

export function Cards() {
  const [card, setCard] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch("/api/card");
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCard();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Slider>
      {card.map((card, index) => (
        <div
          key={index}
          className="border-2 bg-[#FAF3E3] border-[#8B572A] rounded-lg p-4 w-55 h-75 shadow-md hover:bg-opacity-90 flex flex-col items-center justify-center"
        >
          <h3 className="text-lg text-[#3E423A] font-bold border-b border-[#8B572A] pb-2">
            {card.property}
          </h3>
          <p className="text-md text-[#0f0d0b] italic mt-2">
            {card.description}
          </p>
        </div>
      ))}</Slider>
    </div>
    );
  }
  

export function Customer() {
  const [customer, setCustomer] = useState<CustomerProps[]>([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch("/api/customer");
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomer();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Slider>
        {customer.map((customer, index) => (
        <div
          key={index}
          className="border-2 bg-[#2f3f4f] border-[#8B572A] rounded-lg p-4 w-55 h-90 shadow-md hover:bg-opacity-90 flex items-center justify-center text-center"
        >
          <div>
            <h3 className="text-lg text-[#c0dee3] font-bold border-b border-[#a7e3ee] pb-2">
              {customer.name}
            </h3>
            <p className="text-md text-[#e6d7c9] italic">
              {customer.description}
            </p>
          </div>
        </div>
      ))}</Slider>
    </div>
  );
}
