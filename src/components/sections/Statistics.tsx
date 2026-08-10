import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 20, suffix: '+', label: 'Years of experience' },
  { value: 48, suffix: '', label: 'Projects delivered' },
  { value: 2.4, suffix: 'M+', label: 'Sq. Ft. developed', isFloat: true },
  { value: 18, suffix: '', label: 'Awards & recognitions' },
];

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = stats[index].value;
        const isFloat = stats[index].isFloat;

        gsap.to(el, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          innerHTML: targetValue,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerHTML: isFloat ? 0.1 : 1 },
          onUpdate: function() {
            if (isFloat) {
              el.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
            } else {
              el.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-onyx text-alabaster px-5 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col md:px-8 first:px-0">
              <div className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-none mb-4 text-alabaster flex items-baseline">
                <span ref={(el) => { numberRefs.current[idx] = el; }}>0</span>
                <span className="text-champagne ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm tracking-wider font-light text-white/60 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
