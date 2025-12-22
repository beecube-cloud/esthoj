"use client"
import SectionWithLineDecorator from '@/sections/sectionWithLineDecorator'
import React, { useRef } from 'react'

export default function UnderConstruction() {
    const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <SectionWithLineDecorator sectionRef={sectionRef} backgroundColor="">
    <div className="max-w-7xl mx-auto relative z-10 py-24 px-4">
        <h1 className="text-4xl font-bold">This page is under construction</h1>
        <p className="text-lg">Please check back later for updates.</p>
    </div>
    </SectionWithLineDecorator>

  )
}