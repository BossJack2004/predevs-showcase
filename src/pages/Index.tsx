import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Services from '@/components/Sections/Services';
import Portfolio from '@/components/Sections/Portfolio';
import Contact from '@/components/Sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
