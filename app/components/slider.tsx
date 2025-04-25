"use client";
import React, { useState, useEffect } from "react";

interface SliderProps {
    children: React.ReactNode;
    slidesToShow?: number;
}

const Slider: React.FC<SliderProps> = ({ children, slidesToShow = 3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = React.Children.count(children);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= totalSlides - slidesToShow ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 gap-4"
                style={{
                    transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <div
                        className="w-[calc(100%_/3)] flex-shrink-0"
                    >
                        {child}
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8594;
            </button>
        </div>
    );
};

export default Slider;
