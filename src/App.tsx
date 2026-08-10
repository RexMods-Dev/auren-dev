
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Introduction from './components/sections/Introduction';
import Statistics from './components/sections/Statistics';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Expertise from './components/sections/Expertise';
import Craftsmanship from './components/sections/Craftsmanship';
import Process from './components/sections/Process';
import Testimonial from './components/sections/Testimonial';
import Trust from './components/sections/Trust';
import Journal from './components/sections/Journal';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Statistics />
        <FeaturedProjects />
        <Expertise />
        <Craftsmanship />
        <Process />
        <Testimonial />
        <Trust />
        <Journal />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
