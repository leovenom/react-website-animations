import styled, { css } from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

export const Nav =  styled.nav`
  /* background: ${({scrollNav}) => (scrollNav ? '#F5F5F5' : '#F5F5F5')}; */
  background: ${({scrollNav}) => (scrollNav ? '#394D6E' : 'transparent')};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 1rem 2rem;
  }
`;


export const NavLink = css`
  color: #2F2E36;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`
export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 25px;
`;
export const MenuBars = styled(FaBars)`
  display: none;
  

  @media screen and (max-width: 768px) {
    color: #F5F5F5;
    display: block;
    background-size: contain;
    height: 50px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(-50%, 25%)
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;