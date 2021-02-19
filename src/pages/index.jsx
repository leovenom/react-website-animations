import React, {useState} from 'react'
import DropDown from '../components/DropDown/DropDown';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
// import InfoSection from '../components/Info/InfoSection';
// import InfoSection2 from '../components/Info2/InfoSection';
import Navbar from '../components/Navbar/Navbar'
// import { InfoData, InfoDataThree, InfoDataTwo, InfoDataFour } from '../data/InfoData';
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
    {/* <InfoSection2 {...InfoData}/>
    <InfoSection2 {...InfoDataTwo}/>
    <InfoSection {...InfoDataThree}/>
    <InfoSection {...InfoDataFour}/> */}
    <Footer />
    </>
  );
}

export default App;
