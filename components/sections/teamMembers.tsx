'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { TeamSectionAnimatedProps } from '@/utils/types';



export function TeamSectionAnimated({
  members,
  title = "Meet our Experts",
  subtitle = "Our team boasts top green energy experts, driving innovation in sustainability.",
  cardsPerView = 4,
  autoPlay = false,
  autoPlayInterval = 3000,
  className = "",
}: TeamSectionAnimatedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxIndex = Math.max(0, members.length - cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || members.length <= cardsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, maxIndex, members.length, cardsPerView]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1F4E] mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          {members.length > cardsPerView && (
            <div className="hidden lg:flex gap-3">
              <button
                onClick={goToPrevious}
                disabled={!canGoPrevious || isAnimating}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  canGoPrevious && !isAnimating
                    ? 'border-gray-300 hover:border-[#1A1F4E] hover:bg-[#1A1F4E] hover:text-white text-gray-600 hover:scale-110'
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                aria-label="Previous team members"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                disabled={!canGoNext || isAnimating}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  canGoNext && !isAnimating
                    ? 'border-gray-300 hover:border-[#1A1F4E] hover:bg-[#1A1F4E] hover:text-white text-gray-600 hover:scale-110'
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                aria-label="Next team members"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Team Members Grid */}
        <div className="relative overflow-hidden">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {members.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  isAnimating ? 'opacity-80' : 'opacity-100'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                <div className="absolute w-content inset-x-4 bottom-4 bg-white rounded-xl p-4 shadow-md w-fit">
                  <p className="text-[#03045E] font-semibold">{member.name}</p>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {members.length > cardsPerView && (
          <div className="flex lg:hidden justify-center gap-3 mt-8">
            <button
              onClick={goToPrevious}
              disabled={!canGoPrevious || isAnimating}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canGoPrevious && !isAnimating
                  ? 'border-gray-300 hover:border-[#1A1F4E] hover:bg-[#1A1F4E] hover:text-white text-gray-600'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous team members"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext || isAnimating}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canGoNext && !isAnimating
                  ? 'border-gray-300 hover:border-[#1A1F4E] hover:bg-[#1A1F4E] hover:text-white text-gray-600'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next team members"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* Progress Indicator */}
        {members.length > cardsPerView && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#1A1F4E]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400 hover:w-4'
                } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}