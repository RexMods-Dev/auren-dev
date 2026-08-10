export default function CTA() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-onyx text-ivory px-5 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[1.1] mb-8 text-balance max-w-5xl">
          Have a place in mind?<br />
          <span className="text-white/50">Let's build it.</span>
        </h2>
        
        <p className="text-lg md:text-xl font-light text-white/70 max-w-2xl mb-16 leading-relaxed">
          Whether you're looking for your next home, planning a development or exploring an investment opportunity, we'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-ivory text-onyx px-10 py-5 uppercase text-sm tracking-wider font-medium transition-colors border border-transparent hover:bg-champagne group flex items-center justify-center">
            Start a Conversation
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 w-full max-w-lg">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Prefer email?</p>
          <a 
            href="mailto:hello@havenhomes.com" 
            className="text-xl md:text-2xl font-light hover:text-champagne transition-colors"
          >
            hello@havenhomes.com
          </a>
        </div>
      </div>
    </section>
  );
}
