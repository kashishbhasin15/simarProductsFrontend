
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import Corporate from './pages/Corporate/Corporate';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
