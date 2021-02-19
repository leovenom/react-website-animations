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
  /* grid-template-rows: 800px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 4rem 0rem 0rem 0rem;
  }
`;
const ColumnLeft = styled.div`
  color:#2F2E36;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0rem 0rem 5rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    padding: 2rem 3rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(2rem,5vw,4.3rem);
  }
  p {
    margin-bottom: 2rem;
    max-width: 600px;
    font-size: clamp(1.2rem,1.6vw,1.6rem);
  }
`;
const ColumnRight = styled.div`
  padding: 4rem 2rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
    padding: 2rem 1.5rem 0rem 1.5rem;
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

const LinkWrapper = styled.div`
  display: flex;
  padding: 2rem 2rem 3rem 2rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 1rem 2rem 3rem;
  text-align: left;
  max-width: 800px;
  box-sizing: border-box;
      color:#2F2E36;
      font-size: clamp(1.2rem,1.6vw,1.4rem);
  /* padding: 2rem; */

  @media screen and (max-width: 820px) {
    margin: 0;
    /* padding: 1rem 1rem; */
    width: 100%;
    align-items: center;
  }
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding: 3rem 0 3rem;
  }
`

const about = ({heading, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, paragraphSix,  buttonLabel, image, reverse}) => {
  return ( 
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          {/* <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <p>{paragraphFour}</p> */}
          {/* <Button to="/contact" primary="true">{buttonLabel}</Button> */}
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="Hajo" />
        </ColumnRight>
      </Container>

      <LinkContainer>
          <LinkWrapper>
            <LinkItems>
              <p>{paragraphTwo}</p>
              <br/>
              <p>{paragraphThree}</p>
              <br/>
              <p>{paragraphFour}</p>
            </LinkItems>
            {/* <LinkItems>
            <p>{paragraphFour}</p>
            </LinkItems>
            <LinkItems>
            <p>{paragraphFive}</p>
            </LinkItems> */}
          </LinkWrapper>
        </LinkContainer>

    </Section>
  )
}

export default about
