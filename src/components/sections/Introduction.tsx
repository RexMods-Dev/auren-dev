import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="py-24 md:py-40 bg-ivory text-onyx px-5 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-charcoal/50">
            01 / Our Approach
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight text-onyx text-balance">
              Architecture is more than what we build.<br />
              It is how people live.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-5/12 flex flex-col justify-end lg:pt-10"
          >
            <p className="text-lg md:text-xl font-light text-charcoal/80 leading-relaxed mb-10">
              From the first line drawn to the final detail delivered, we approach every development with the same belief: exceptional spaces begin with thoughtful decisions.
            </p>
            <div className="w-16 h-[1px] bg-champagne mb-8" />
            <a href="#about" className="group inline-flex items-center text-sm uppercase tracking-wider font-medium text-onyx hover:text-champagne transition-colors">
              Discover HĀVEN
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
