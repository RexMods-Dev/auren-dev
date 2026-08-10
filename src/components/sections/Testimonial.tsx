export default function Testimonial() {
  return (
    <section className="py-24 md:py-40 bg-ivory text-onyx px-5 md:px-10 xl:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <blockquote className="mb-12">
          <p className="font-serif text-3xl md:text-5xl lg:text-[64px] leading-[1.2] text-balance">
            “HĀVEN didn't simply deliver a home. They delivered a place that feels like it was always meant to be there.”
          </p>
        </blockquote>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-[1px] bg-champagne mb-6" />
          <p className="font-medium text-lg uppercase tracking-wider mb-2">
            Rohan & Meera Nair
          </p>
          <p className="text-sm font-light text-charcoal/60 uppercase tracking-widest">
            Private Residence · Kochi
          </p>
        </div>
      </div>
    </section>
  );
}
