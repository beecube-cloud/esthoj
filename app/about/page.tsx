"use client"
import AboutSection from "@/components/sections/about";
import SectionWithLineDecorator from "@/sections/sectionWithLineDecorator";
import { useEffect, useRef } from "react";

export default function About() {

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
           
          },
          { threshold: 0.1 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => observer.disconnect();
      }, []);
  return (
    <>
          <SectionWithLineDecorator sectionRef={sectionRef} backgroundColor="">
            <AboutSection   />
          </SectionWithLineDecorator>
     </>
  );
}