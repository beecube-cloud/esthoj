'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQSectionAnimatedProps } from '@/utils/types';
import { SectionWrapper } from '../utils/LightPurpleContentWrapper';



export function FAQSectionAnimated({
  faqs,
  title = "Answers to the frequently asked questions.",
  subtitle = "FAQ",
  contactText = "For assistance, please visit our",
  contactLink = "/contact",
  contactLinkText = "Contact Us",
  phone = "(671) 555-0110",
  supportText = "Our dedicated team is ready to help you on your journey to a greener, more sustainable future.",
  allowMultipleOpen = false,
  animationDuration = 300,
  className = "",
}: FAQSectionAnimatedProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleItem = (id: string) => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (allowMultipleOpen) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }

    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          <div className="flex flex-col justify-between">
            <div className="animate-fade-in">

              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#1A1F4E] animate-pulse" />
                <span className="text-sm font-medium text-[#1A1F4E]">
                  {subtitle}
                </span>
              </div>


              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1F4E] mb-8 leading-tight">
                {title}
              </h2>
            </div>


            <div className="mt-8 lg:mt-0 animate-fade-in">
              <h3 className="text-xl font-semibold text-[#1A1F4E] mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {contactText}{' '}
                <a
                  href={contactLink}
                  className="text-[#1A1F4E] font-semibold underline hover:text-[#E53935] transition-colors duration-200"
                >
                  {contactLinkText}
                </a>{' '}
                page or call our customer support hotline at{' '}
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="text-[#1A1F4E] font-semibold hover:text-[#E53935] transition-colors duration-200"
                >
                  {phone}
                </a>
                . {supportText}
              </p>
            </div>
          </div>


          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    disabled={isAnimating}
                    className="w-full flex items-center justify-between p-6 text-left disabled:cursor-not-allowed"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-lg font-semibold text-[#1A1F4E] pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div
                        className={`transition-transform duration-${animationDuration} ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-6 w-6 text-[#1A1F4E]" />
                        ) : (
                          <Plus className="h-6 w-6 text-[#1A1F4E]" />
                        )}
                      </div>
                    </div>
                  </button>


                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`overflow-hidden transition-all ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      transitionDuration: `${animationDuration}ms`,
                    }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed animate-fade-in">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}