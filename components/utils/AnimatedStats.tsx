"use client";

import React from 'react';

interface StatItemProps {
    value: string;
    label: string;
    suffix?: string;
    prefix?: string;
    className?: string;
  }
  
  

interface AnimatedStatProps extends StatItemProps {
    duration?: number;
  }
  
  export function AnimatedStat({ 
    value, 
    label, 
    suffix = "", 
    prefix = "",
    duration = 2000,
    className = "" 
  }: AnimatedStatProps) {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
  
    // Extract numeric value
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, [isVisible]);
  
    React.useEffect(() => {
      if (!isVisible) return;
  
      let startTime: number;
      let animationFrame: number;
  
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
  
        if (progress < 1) {
          setCount(Math.floor(numericValue * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(numericValue);
        }
      };
  
      animationFrame = requestAnimationFrame(animate);
  
      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, numericValue, duration]);
  
    const formatNumber = (num: number) => {
      return num.toLocaleString();
    };
  
    return (
      <div ref={ref} className={`text-center ${className}`}>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
          {prefix}{formatNumber(count)}{value.includes('+') ? '+' : ''}{suffix}
        </div>
        <div className="text-gray-600 text-sm md:text-base">
          {label}
        </div>
      </div>
    );
  }
  