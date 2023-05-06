// import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Testimonials />
    </div>
  );
}

export default App;
