import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import GlobalStyle from '../globalStyles';
import DropDown from '../components/DropDown/DropDown';
import InfoSection3 from '../components/Info3/InfoSection';
import styled from 'styled-components';
import { PhotoData, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12, Photo13, Photo14 } from '../data/PhotoData';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 5rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc(100vw - 1300px) /2;
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-rows: 700px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;


  h1 {
    margin-bottom: 1rem;
    font-size: clamp(3.5rem, 8vw, 8rem);
  }
  h2{
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
    text-align: center;
    font-size: clamp(1.5rem, 2vw, 2rem);
    padding: 1rem 2rem 0px 2rem;
    @media screen and (max-width: 768px) {
      padding: 1rem 0rem 0px 0rem;
  }
  }
  
`;


const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <NavbarAbout toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Section>
      <Container>
        <Column>
          <h1>Eiskunst</h1>
          <h2>Online Ausstellung</h2>
          <p>Die Verwandlung von Schnee zu Eis, zu Wasser, Wolken und wieder zu Schnee. Ein ewiger Kreislauf von geradezu mystischer Ästhetik. Eine vergletscherte, unwirkliche Eislandschaft. In den Polarmeeren treibende gigantische und gleichzeitig filigrane Eisberge. Gestrandete und schmelzende Edelsteine oder Skulpturen aus Eis. Eine Welt von erhabener Schönheit mit sich ständig wandelnden Farb-, Licht- und Struktureffekten. Ein Versuch, die Faszination dieser fast außerirdisch anmutenden Szenerie in Bildern zu erfassen.</p>
        </Column>
      </Container>
    </Section>
      <InfoSection3 {...PhotoData}/>
      <InfoSection3 {...Photo2}/>
      <InfoSection3 {...Photo3}/>
      <InfoSection3 {...Photo4}/>
      <InfoSection3 {...Photo5}/>
      <InfoSection3 {...Photo6}/>
      <InfoSection3 {...Photo7}/>
      <InfoSection3 {...Photo8}/>
      <InfoSection3 {...Photo9}/>
      <InfoSection3 {...Photo10}/>
      <InfoSection3 {...Photo11}/>
      <InfoSection3 {...Photo12}/>
      <InfoSection3 {...Photo13}/>
      <InfoSection3 {...Photo14}/>
      <Footer />
    </>
    
  )
}

export default Shop
