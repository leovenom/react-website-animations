import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import GlobalStyle from '../globalStyles';
import AboutPage from '../components/About/About';
import { NewsData } from '../data/NewsData';
import DropDown from '../components/DropDown/DropDown';
import ScrollToTop from '../components/ScrollToTop';

const News = () => {
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
      <AboutPage {...NewsData}/>
      <Footer />
    </>
    
  )
}

export default News;


