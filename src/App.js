import React, {useState} from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero />
    <InfoSection />
    <Footer />
    </>
  );
}

export default App;
