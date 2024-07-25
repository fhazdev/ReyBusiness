import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    // <>
    //   <Header />
    //   <Home />
    //   <Footer />
    // </>

    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App