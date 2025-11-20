'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '../utils/LightPurpleContentWrapper';

interface Division {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
}

interface DivisionsSectionAnimatedProps {
  divisions: Division[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function DivisionsSectionAnimated({
  divisions,
  title = "Our Divisions",
  subtitle = "We provide end-to-end construction and facility management solutions—delivering value through every phase of the project lifecycle.",
  autoPlay = false,
  autoPlayInterval = 5000,
  className = "",
}: DivisionsSectionAnimatedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    if (!autoPlay || divisions.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, divisions.length]);

  const goToNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % divisions.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + divisions.length) % divisions.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentDivision = divisions[currentIndex];

  return (
    <SectionWrapper variant="primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl animate-fade-in">
            {subtitle}
          </p>
        </div>

        {/* Division Card */}
        <div className="bg-[#1A1F4E] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div
                className={`transition-all duration-500 ${
                  isAnimating
                    ? direction === 'right'
                      ? 'opacity-0 -translate-x-4'
                      : 'opacity-0 translate-x-4'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {currentDivision.title}
                </h3>
                
                <p className="text-xl italic text-white/90 mb-6">
                  "{currentDivision.tagline}"
                </p>
                
                <p className="text-base text-white/80 leading-relaxed mb-8">
                  {currentDivision.description}
                </p>
                
                <Button
                  className="bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-6 text-lg rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
                  onClick={() => window.location.href = currentDivision.link}
                >
                  Visit Division
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Navigation Arrows */}
              {divisions.length > 1 && (
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={goToPrevious}
                    disabled={isAnimating}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 disabled:opacity-50 hover:scale-110"
                    aria-label="Previous division"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    disabled={isAnimating}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 disabled:opacity-50 hover:scale-110"
                    aria-label="Next division"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-auto">
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  isAnimating
                    ? direction === 'right'
                      ? 'opacity-0 translate-x-4'
                      : 'opacity-0 -translate-x-4'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <Image
                  src={currentDivision.image}
                  alt={currentDivision.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        {divisions.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {divisions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 disabled:opacity-50 ${
                  index === currentIndex
                    ? 'w-8 bg-[#1A1F4E]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400 hover:w-4'
                }`}
                aria-label={`Go to division ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}