import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const expertiseItems = [
  { id: '01', title: 'Residential Development', desc: 'Curated living spaces that redefine contemporary luxury.' },
  { id: '02', title: 'Luxury Villas', desc: 'Bespoke private estates harmonized with their environment.' },
  { id: '03', title: 'Commercial Spaces', desc: 'Future-ready environments for global enterprises.' },
  { id: '04', title: 'Turnkey Construction', desc: 'End-to-end execution with uncompromising precision.' },
  { id: '05', title: 'Property Investment', desc: 'Strategic asset development with enduring value.' },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-40 bg-onyx text-ivory px-5 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-6">
              03 / What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Built on expertise.<br />Defined by detail.
            </h2>
            <div className="w-16 h-[1px] bg-champagne" />
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col w-full">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-10 md:py-12 border-b border-white/10 hover:border-white/30 transition-colors relative cursor-pointer"
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Gold accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-champagne scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

              <div className="flex items-start sm:items-center gap-6 md:gap-12 pl-0 group-hover:pl-4 transition-all duration-500 z-10 relative">
                <span className="font-serif text-3xl md:text-4xl text-white/30 group-hover:text-champagne transition-colors duration-500">
                  {item.id}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/60 font-light text-sm md:text-base group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 ml-auto sm:ml-0 z-10 relative">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne group-hover:text-onyx transition-all duration-500">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
