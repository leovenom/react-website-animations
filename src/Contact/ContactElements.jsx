import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  /* min-height: 560px; */
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  /* background: rgb(63, 143, 205); */

  @media screen and (max-width: 480px) {
  height: 100%;
  }
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: auto;
  }
`
export const Icon = styled(Link)`
  margin-left: 90px;
  margin-top: 18px;
  margin-bottom: 3rem;
  text-decoration: none;
  color: #394D6E;
  font-size: 24px;
  font-style: italic;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 780px) {
    justify-content: center;
    display: flex;
    margin-top: 20px;
    margin-left: 0px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background-color: #394D6E;
  max-width: 400px;
  height: auto;
  /* width: 100%; */
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
  `
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 19px;
  font-weight: 400;
  text-align: center;
  font-weight: 800;
  letter-spacing: 1.4px;
  font-family: 'Vollkorn', serif;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`
export const FormInput = styled.input`
  padding: 14px 16px;
  margin-bottom: 28px;
  border-radius: 4px;
`
export const FormInputText = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  max-height: 250px;
  resize: vertical;
`
export const FormButton = styled.button`
  background: #1B93FA;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    transform: translateY(-2px);
  }
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`