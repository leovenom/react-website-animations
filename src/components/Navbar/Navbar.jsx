import React, {useState, useEffect} from 'react';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn} from './NavbarElements'
import { menuData } from '../../data/MenuData'
import { ButtonNav } from '../Button/ButtonElements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  
  return (
    <Nav scrollNav={scrollNav}>
      <Logo to='/' alt="Logo" title="Logo">LAUENSTEIN</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      
      <NavBtn>
      <ButtonNav to='/contact' primary='true' alt="Contact us" title="Contact us">Kontakt</ButtonNav>
      </NavBtn>
    </Nav>
  )
}

export default Navbar;
