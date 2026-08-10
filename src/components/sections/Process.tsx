import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: '01', title: 'DISCOVER', desc: 'Understanding the site, context and vision.' },
  { id: '02', title: 'DESIGN', desc: 'Developing architecture around people and place.' },
  { id: '03', title: 'BUILD', desc: 'Engineering with precision and discipline.' },
  { id: '04', title: 'DELIVER', desc: 'Completing every detail to an exacting standard.' },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the progress line
      gsap.to(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
      });

      // Animate step highlights
      stepsRef.current.forEach((step) => {
        if (!step) return;
        
        gsap.to(step, {
          scrollTrigger: {
            trigger: step,
            start: "top center+=100",
            end: "bottom center",
            toggleClass: "active-step",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-alabaster text-onyx px-5 md:px-10 xl:px-24">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight text-center mb-20 md:mb-32">
          From vision to reality.
        </h2>

        <div className="relative">
          {/* Vertical Progress Line Base */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-charcoal/10 -translate-x-1/2" />
          
          {/* Animated Gold Progress Line */}
          <div 
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-champagne -translate-x-1/2 scale-y-0 z-10" 
          />

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className={cn(
                    "relative flex items-center group transition-colors duration-500",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Point */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-ivory border-2 border-charcoal/20 -translate-x-1/2 z-20 transition-colors duration-500 [.active-step_&]:border-champagne [.active-step_&]:bg-champagne" />
                  
                  {/* Content (Mobile: all right. Desktop: alternating) */}
                  <div className={cn(
                    "pl-16 md:pl-0 w-full md:w-1/2",
                    isEven ? "md:pr-24 md:text-right" : "md:pl-24 md:text-left"
                  )}>
                    <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-3 font-semibold transition-colors duration-500 [.active-step_&]:text-champagne">
                      {step.id} — {step.title}
                    </p>
                    <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-charcoal/50 transition-colors duration-500 [.active-step_&]:text-onyx">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Empty space for desktop layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Global styles for active step */}
      <style>{`
        .active-step {
          /* Just a marker class for GSAP toggleClass */
        }
      `}</style>
    </section>
  );
}
