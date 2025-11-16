'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0A1236] overflow-hidden flex items-center justify-center">
      {/* Parallax Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Image - Construction Workers - Slow parallax */}
        <div 
          className="absolute top-32 left-[-30] w-72 h-80"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero/image1.svg"
              alt="Construction workers"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Top Right Image - Meeting - Medium parallax */}
        <div 
          className="absolute top-24 right-[-30] w-80 h-64"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero/image2.svg"
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Left Image - Office - Medium parallax */}
        <div 
          className="absolute bottom-0 left-40 w-1/3 h-72"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero/image3.svg"
              alt="Office workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Right Image - Engineering - Fast parallax */}
        <div 
          className="absolute bottom-[-30] right-36 w-80 h-96"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero/image4.svg"
              alt="Engineering work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Logo/Brand Text */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Image src="/assets/hero/dot.svg" alt="Dot" width={14} height={14} />
          <span className="text-white text-sm font-medium tracking-wide">Esthoj Group</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Building People &<br />
          Projects for the Future.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Esthoj Group is a multi-disciplinary engineering and development company committed to transforming
          ideas, empowering people, and delivering infrastructure that drives national growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-base font-semibold min-w-[200px]"
          >
            <Link href="/divisions">Explore Divisions</Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold min-w-[200px]"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1236]/50 to-[#0A1236] pointer-events-none"></div>
    </section>
  );
}