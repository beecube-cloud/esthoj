import { useEffect, useRef, useState } from 'react';

export default function SlideInRight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      } focus-visible:translate-x-0 focus-visible:opacity-100`}
      tabIndex={-1}
    >
      {children}
    </div>
  );
}           