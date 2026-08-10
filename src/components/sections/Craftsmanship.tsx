import { motion } from 'framer-motion';

const details = [
  '01 — MATERIAL',
  '02 — CRAFT',
  '03 — PRECISION',
  '04 — TIMELESSNESS',
];

export default function Craftsmanship() {
  return (
    <section className="bg-ivory text-onyx">
      <div className="flex flex-col lg:flex-row">
        
        {/* Image Side */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop" 
            alt="Architectural details" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 py-24 md:py-32 px-5 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              The difference is in the details.
            </h2>
            <p className="text-lg md:text-xl font-light text-charcoal/80 leading-relaxed mb-16">
              We obsess over the elements most people never notice — the weight of a door, the precision of a junction, the way morning light moves across a room.
            </p>

            <div className="flex flex-col gap-6">
              {details.map((detail, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center group cursor-default"
                >
                  <div className="w-0 h-[1px] bg-champagne group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-4 opacity-0 group-hover:opacity-100" />
                  <p className="text-sm uppercase tracking-[0.2em] font-medium text-charcoal/60 group-hover:text-onyx transition-colors duration-300">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
