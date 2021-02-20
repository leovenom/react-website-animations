import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer/Footer';
import GlobalStyle from '../globalStyles';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import DropDown from '../components/DropDown/DropDown';
import Contact from '../Contact';

const ContactPage = () => {
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
    <Contact />
    <Footer />
    </>
  )
}
export default ContactPage
