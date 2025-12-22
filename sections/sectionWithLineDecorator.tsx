import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";

export default function sectionWithLineDecorator(
    {
        children,
        sectionRef,
        backgroundColor = "bg-white",
      }: {
        children: React.ReactNode;
        sectionRef?: React.RefObject<HTMLDivElement | null>;
        backgroundColor?: string;
      }
) {

  return (
    <div ref={sectionRef} className={`w-full min-h-screen ${backgroundColor} via-blue-50   relative overflow-hidden`}>


      {/* Left decorative line SVG */}
      <div className="absolute left-0 top-0 h-full opacity-15">
        <Image
          src="/contact-us-left-line.svg"
          alt="Left decorative line"
          width={100}
          height={800}
          className="h-full w-auto object-cover"
          priority
        />
      </div>
      
      {/* Right decorative line SVG */}
      <div className="absolute right-0 top-0 h-full opacity-15">
        <Image
          src="/contact-us-right-line.svg"
          alt="Right decorative line"
          width={100}
          height={800}
          className="h-full w-auto object-cover"
          priority
        />
      </div>
      {children}
    </div>
  )
}