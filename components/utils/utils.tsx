"use client";

import React from 'react';
import Image from 'next/image';



interface SectionLabelProps {
  children: React.ReactNode;
  dotColor?: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2  mb-6 border-b border-gray-200 pb-3">
      <div 
        className={`w-2 h-2 rounded-full bg-[var(--color-esthoj-light)]`}
      />
      <span className="text-gray-700 font-medium text-sm md:text-base">
        {children}
      </span>
    </div>
  );
}


export function SectionLabelAnimated({ children, dotColor = "#3B82F6" }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div 
        className="w-2 h-2 rounded-full animate-pulse bg-[var(--color-esthoj-light)]"
      />
      <span className="text-gray-700 font-medium text-sm md:text-base">
        {children}
      </span>
    </div>
  );
}



interface SectionHeadingProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function SectionHeading({ 
  children, 
  color = "#1E40AF",
  className = "" 
}: SectionHeadingProps) {
  return (
    <h2 
      className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${className}`}
      style={{ color }}
    >
      {children}
    </h2>
  );
}


export function SectionHeadingGradient({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 
      className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </h2>
  );
}

interface DescriptionTextProps {
  children: React.ReactNode;
  className?: string;
}

export function DescriptionText({ children, className = "" }: DescriptionTextProps) {
  return (
    <p className={`text-gray-600 text-base md:text-lg leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );
}


export function DescriptionTextLarge({ children, className = "" }: DescriptionTextProps) {
  return (
    <p className={`text-gray-600 text-lg md:text-xl leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );
}



interface ChecklistItemProps {
  children: React.ReactNode;
  iconColor?: string;
  checkmark?: boolean;
}

export function ChecklistItem({ 
  children, 
  iconColor = "#0A1236",
  checkmark = true 
}: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div 
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-[var(--color-esthoj)]"
      >
        {checkmark && (
          <svg 
            className="w-4 h-4 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        )}
      </div>
      <span className="text-gray-700 text-base md:text-lg flex-1">
        {children}
      </span>
    </div>
  );
}


export function ChecklistItemHover({ 
  children, 
  iconColor = "#1E40AF" 
}: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 mb-4 group hover:translate-x-1 transition-transform duration-200">
      <div 
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: iconColor }}
      >
        <svg 
          className="w-4 h-4 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
      <span className="text-gray-700 text-base md:text-lg flex-1">
        {children}
      </span>
    </div>
  );
}


export function ChecklistItemArrow({ children, iconColor = "#3B82F6" }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div 
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
        style={{ backgroundColor: iconColor }}
      >
        <svg 
          className="w-4 h-4 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
      <span className="text-gray-700 text-base md:text-lg flex-1">
        {children}
      </span>
    </div>
  );
}

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageCard({ src, alt, className = "" }: ImageCardProps) {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={700}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}


export function ImageCardHover({ src, alt, className = "" }: ImageCardProps) {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1}
        height={1}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}


export function ImageCardBorder({ src, alt, className = "" }: ImageCardProps) {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-xl border-4 border-white ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={700}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}


interface ChecklistProps {
  children: React.ReactNode;
  className?: string;
}

export function Checklist({ children, className = "" }: ChecklistProps) {
  return (
    <div className={`space-y-2 mt-8 ${className}`}>
      {children}
    </div>
  );
}


export function ContentSection({ children, className = "" }: ChecklistProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
}