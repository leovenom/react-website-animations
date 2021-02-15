import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba( 15, 38, 92, 1) 0%,
    rgba( 113, 198, 255, 1) 100%
  );
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  margin-left: 95px;
  margin-top: 30px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 780px) {
    justify-content: center;
    display: flex;
    margin-top: 35px;
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
  background-color: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
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
  font-family: 'Montserrat', sans-serif;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
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
  background: #71C6FF;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`