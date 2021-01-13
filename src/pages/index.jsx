import React, {useState} from 'react'
import DropDown from '../components/DropDown/DropDown';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import InfoSection from '../components/Info/InfoSection';
import Navbar from '../components/Navbar/Navbar'
import { InfoData, InfoDataTwo } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
import GlobalStyle from '../globalStyles';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle}/>
    <DropDown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    <InfoSection {...InfoDataTwo}/>
    <Footer />
    </>
  );
}

export default App;