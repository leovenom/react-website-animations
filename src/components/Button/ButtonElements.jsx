import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) =>  (primary ? '#1B93FA' : 'CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({big}) => (big ? '16px 40px' :  '14px 24px')};
  color: ${({primary}) => (primary ? '#fff' :  '#1B93FA')};
  font-size: ${({big}) => (big ? '20px' :  '14px')};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
  }
`
export const ButtonNav = styled(Link)`
  background: ${({ primary }) =>  (primary ? '#1B93FA' : 'CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({big}) => (big ? '16px 40px' :  '14px 24px')};
  color: ${({primary}) => (primary ? '#fff' :  '#394D6E')};
  font-size: ${({big}) => (big ? '20px' :  '14px')};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
  }
`


export const Button2 = styled(Link)`
  /* background: ${({ primary }) =>  (primary ? '#2F2E36' : 'CD853F')}; */
  white-space: nowrap;
  outline: none;
  border: none;
  /* min-width: 100px;
  max-width: 200px; */
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: #1B93FA;
  /* padding: ${({big}) => (big ? '16px 40px' :  '14px 24px')};
  color: ${({primary}) => (primary ? '#fff' :  '#000d1a')};
  font-size: ${({big}) => (big ? '20px' :  '14px')}; */

  &:hover {
    color:#394D6E;
    transition: 0.3s ease-in-out;
  }
`