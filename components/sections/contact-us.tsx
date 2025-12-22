"use client";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionWithLineDecorator from "@/sections/sectionWithLineDecorator";

const ContactSection = ({
  textheading = "text-primary",
  textcontent = "text-gray-600",
  backgroundColor = "bg-white"
}: {
  textheading?: string,
  textcontent?: string,
  backgroundColor?: string
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate contact info items
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
  
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWithLineDecorator sectionRef={sectionRef} backgroundColor={backgroundColor}>

      <div className="max-w-7xl mx-auto relative z-10 py-24 px-4">
              <div className="grid gri d-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className={`transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}>
                    <h2 className={`text-5xl ${textheading} mb-4`}>
                      Contact us
                    </h2>
                    <p className={`${textcontent} text-lg`}>
                      We are here to help you make a first move to greener choice.
                    </p>
                  </div>

                  <div className={`space-y-6 ${textcontent}`}>
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        content: (
                          <a
                            href="mailto:info@esthoj.com"
                            className={`${textcontent} font-medium hover:underline hover:text-primary transition-colors duration-300`}>
                            info@esthoj.com`
                          </a>
                        )
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        content: (
                          <p className={`${textcontent} font-medium`}>
                            0814 098 9555 | 0905 160 2999 |<br />
                            0908 398 6435
                          </p>
                        )
                      },
                      {
                        icon: MapPin,
                        label: "Address",
                        content: (
                          <p className={`${textcontent} font-medium`}>
                            Suit 10, WABP Plaza  Amayo Adedevoh Way, Plot No:175 Cadastral Zone B08, Jahi, Abuja
                          </p>
                        )
                      }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      const isItemVisible = visibleItems.includes(index);
                      
                      return (
                        <div 
                          key={index}
                          className={`flex items-start gap-4 group transition-all duration-700 hover:transform hover:scale-105 ${
                            isItemVisible
                              ? 'opacity-100 transform translate-x-0'
                              : 'opacity-0 transform -translate-x-8'
                          }`}
                          style={{ transitionDuration: '1000ms', transitionDelay: `${300 + index * 200}ms` }}
                        >
                          <div className="bg-primary p-3 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 group-hover:shadow-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1 group-hover:text-primary transition-colors duration-300">{item.label}</p>
                            {item.content}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={`bg-white rounded-3xl shadow-lg p-8 transition-all duration-1000 delay-500 hover:shadow-xl ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Fill out the form
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { name: 'fullName', label: 'Full Name', type: 'text' },
                      { name: 'email', label: 'Email', type: 'email' },
                      { name: 'phone', label: 'Phone', type: 'tel' },
                    ].map((field, index) => (
                      <div key={field.name} className={`transition-all duration-700 delay-${700 + index * 100} ${
                        isVisible 
                          ? 'opacity-100 transform translate-x-0' 
                          : 'opacity-0 transform translate-x-8'
                      }`}>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                          focusedField === field.name ? 'text-primary' : 'text-gray-700'
                        }`}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          onFocus={() => handleFocus(field.name)}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all duration-300 transform ${
                            focusedField === field.name
                              ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300 focus:border-transparent'
                          }`}
                          required
                        />
                      </div>
                    ))}

                    <div className={`transition-all duration-700 delay-1000 ${
                      isVisible 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-8'
                    }`}>
                      <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-primary' : 'text-gray-700'
                      }`}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none resize-none transition-all duration-300 transform ${
                          focusedField === 'message'
                            ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 focus:border-transparent'
                        }`}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-primary hover:bg-blue-800 text-white'
                      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: '1200ms' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send enquiry
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
      </div>
    </SectionWithLineDecorator>
  );
};

export default ContactSection;
