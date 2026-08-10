import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image scale animation
    tl.fromTo(
      imageRef.current,
      { scale: 1.08 },
      { scale: 1, duration: 2, ease: "power3.out" }
    );

    // Text reveal
    if (textRef.current) {
      const elements = textRef.current.children;
      tl.fromTo(
        elements,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=1.5"
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden bg-onyx">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1581279813180-4dddc1008167?q=80&w=2075&auto=format&fit=crop"
          alt="Modern high-rise architecture"
          className="w-full h-full object-cover"
        />
        {/* Stronger gradient overlays using palette colors for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030405] via-[#111216]/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030405]/90 via-[#24272F]/40 to-transparent z-0" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-5 md:px-10 xl:px-24">
        <div ref={textRef} className="max-w-4xl text-ivory relative">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-6 text-[#AEB4CD] drop-shadow-md">
            Real Estate · Development · Construction
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[68px] leading-[1.15] mb-8 text-white drop-shadow-2xl tracking-wide w-full max-w-none">
            THOUGHTFULLY DESIGNED HOMES<br className="hidden md:block" />
            CRAFTED AROUND THE WAY YOU LIVE.
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl text-[#F4F4F2] drop-shadow-xl leading-relaxed">
            HĀVEN · HOMES & ESTATES creates considered residential and commercial spaces where architecture, craftsmanship and long-term value come together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Primary button using palette's light slate */}
            <button className="bg-[#AEB4CD] hover:bg-[#98A4C2] text-[#030405] px-8 py-4 uppercase text-sm tracking-wider font-semibold transition-colors border border-transparent hover:border-[#AEB4CD] group flex items-center shadow-lg">
              Explore Our Projects
              <span className="ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
            {/* Secondary button */}
            <button className="px-8 py-4 uppercase text-sm tracking-wider border border-[#AEB4CD]/40 hover:border-[#AEB4CD] text-[#F4F4F2] hover:bg-[#24272F]/50 backdrop-blur-sm transition-all shadow-lg">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-5 md:left-10 xl:left-24 z-10">
        <p className="text-xs uppercase tracking-widest text-white/50">EST. 2004</p>
      </div>

      <div className="absolute bottom-10 right-5 md:right-10 xl:right-24 z-10">
        <p className="text-xs uppercase tracking-widest text-white/50 animate-pulse">SCROLL TO DISCOVER ↓</p>
      </div>
    </section>
  );
}
