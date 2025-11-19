"use client";

import React from 'react';
import {
  SectionLabel,
  SectionHeading,
  DescriptionText,
  ChecklistItem,
  ImageCard,
  Checklist,
  ContentSection,
  ChecklistItemHover,
  ImageCardHover,
} from '@/components/utils/utils';
import SlideInRight from '@/components/utils/SlideInRight';


export function AboutSection() {
  return (  
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <SectionLabel>About us</SectionLabel>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <SectionHeading>About Esthoj Group</SectionHeading>

            <ContentSection>
              <DescriptionText>
                Esthoj Group brings together a family of solution-driven companies 
                focused on excellence in construction, consultancy, and capacity 
                development.
              </DescriptionText>

              <DescriptionText>
                For over a decade, our combined expertise has helped organizations, 
                governments, and individuals achieve results that are sustainable, 
                innovative, and globally competitive.
              </DescriptionText>
            </ContentSection>

            <Checklist>
              <ChecklistItem>Integrity and professionalism</ChecklistItem>
              <ChecklistItem>International standards & certifications</ChecklistItem>
              <ChecklistItem>Technical excellence</ChecklistItem>
              <ChecklistItem>Customer-focused delivery</ChecklistItem>
              <ChecklistItem>A commitment to building Nigeria's future</ChecklistItem>
            </Checklist>
          </div>

          {/* Right Column - Image */}
          <SlideInRight>
            <ImageCardHover
                src="/assets/about/about.svg"
                alt="Esthoj Group team meeting"
            />
        </SlideInRight>
        </div>
      </div>
    </section>
  );
}


export function AboutSectionHover() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionLabel>About us</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading>About Esthoj Group</SectionHeading>

            <ContentSection>
              <DescriptionText>
                Esthoj Group brings together a family of solution-driven companies 
                focused on excellence in construction, consultancy, and capacity 
                development.
              </DescriptionText>

              <DescriptionText>
                For over a decade, our combined expertise has helped organizations, 
                governments, and individuals achieve results that are sustainable, 
                innovative, and globally competitive.
              </DescriptionText>
            </ContentSection>

            <Checklist>
              <ChecklistItemHover>Integrity and professionalism</ChecklistItemHover>
              <ChecklistItemHover>International standards & certifications</ChecklistItemHover>
              <ChecklistItemHover>Technical excellence</ChecklistItemHover>
              <ChecklistItemHover>Customer-focused delivery</ChecklistItemHover>
              <ChecklistItemHover>A commitment to building Nigeria's future</ChecklistItemHover>
            </Checklist>
          </div>

          <SlideInRight>
            <ImageCardHover
                src="/assets/about/about.svg"
                alt="Esthoj Group team meeting"
            />
        </SlideInRight>
        </div>
      </div>
    </section>
  );
}


// Default export
export default AboutSection;