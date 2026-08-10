import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Designing for tropical modernism',
    category: 'Architecture',
    readTime: '06 min read',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Why material honesty matters',
    category: 'Craftsmanship',
    readTime: '04 min read',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'The future of urban living',
    category: 'Perspective',
    readTime: '08 min read',
    image: 'https://images.unsplash.com/photo-1496180470114-6ef490e386b1?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-40 bg-ivory text-onyx px-5 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            From the Journal
          </h2>
          <button className="hidden md:flex items-center text-sm uppercase tracking-wider font-medium hover:text-champagne transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-charcoal/10 pt-6">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-light text-charcoal/60">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-champagne" />
                    <span>{article.readTime}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-champagne transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full py-4 border border-charcoal/20 flex items-center justify-center text-sm uppercase tracking-wider font-medium hover:bg-onyx hover:text-ivory transition-colors">
          View All <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
}
