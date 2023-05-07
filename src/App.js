// import './App.css';
import CTASection from './components/CTASection/CTASection';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
