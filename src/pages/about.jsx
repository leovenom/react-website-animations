import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import GlobalStyle from '../globalStyles';
import AboutPage from '../components/About/About';
import { AboutData } from '../data/AboutData';
import DropDown from '../components/DropDown/DropDown';


const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <AboutPage {...AboutData}/>
      <Footer />
    </>
    
  )
}

export default About


