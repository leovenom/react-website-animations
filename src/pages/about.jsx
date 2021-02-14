import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import GlobalStyle from '../globalStyles';
import AboutPage from '../components/About/About';
import { AboutData } from '../data/AboutData';
import DropDown from '../components/DropDown/DropDown';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <NavbarAbout toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <AboutPage {...AboutData}/>
      <Footer />
    </>
    
  )
}

export default About


