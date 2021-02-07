import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button/ButtonElements'
import { DdContainer, Icon, DropDownWrapper, DropDownMenu, DropDownLink, BtnWrap , CloseIcon } from './DropDownElements'

const DropDown = ({isOpen, toggle}) => {
  return (
    <DdContainer isOpen={isOpen} onClick={toggle}> 
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
        <DropDownWrapper>
          <DropDownMenu>
            {menuData.map((item, index) => (
              <DropDownLink to={item.link} key={index}>
                {item.title}
              </DropDownLink>
            ))}
          </DropDownMenu>
          <BtnWrap>
            <Button primary='true' round='true' big='true' to='/contact'>
            Kontakt
            </Button>
          </BtnWrap>
        </DropDownWrapper>
    </DdContainer>
  )
}

export default DropDown
