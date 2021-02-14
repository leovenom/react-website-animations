import React from 'react'
import styled from 'styled-components';
// import { Button } from '../Button/ButtonElements';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 5rem 0px 0px 0px;
`;
const Container = styled.div`
  padding: 3rem calc(100vw - 1300px) /2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 4rem 0rem 0rem 0rem;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 6rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    padding: 2rem 3rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 2rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
    padding: 5rem 0rem 0rem 0rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const about = ({heading, paragraphOne, paragraphTwo, paragraphThree, paragraphFour,  buttonLabel, image, reverse}) => {
  return ( 
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <p>{paragraphFour}</p>
          {/* <Button to="/contact" primary="true">{buttonLabel}</Button> */}
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default about
