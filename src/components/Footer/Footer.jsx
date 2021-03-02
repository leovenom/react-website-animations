import React from 'react'
// FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, SocialIconLink, SocialIcons, SocialMedia
import { FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialMediaWrap, WebsiteRights, FooterLinkEmail, FooterLinkDev } from './FooterElements'
// import { animateScroll as scroll } from 'react-scroll'; SocialLogo

const Footer = () => {
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
              <FooterLinkEmail href={`mailto:hajo.lauenstein@t-online.de`}>hajo.lauenstein@t-online.de</FooterLinkEmail>
              <FooterLink to='/'>+49 0176 6345 5632</FooterLink>
              <FooterLinkEmail href='https://wa.link/3t4h4q' target='_blank' >WhatsApp <FaWhatsapp /> </FooterLinkEmail>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        {/* <SocialMedia> */}
          <SocialMediaWrap>
            <WebsiteRights>Lauenstein © {new Date().getFullYear()} All rights reserved</WebsiteRights>
          </SocialMediaWrap>
          <WebsiteRights >Developed with 💙 by <FooterLinkDev href="https://leonardt.eu/" target="_blank" title="Leonardt developer" >leonardt</FooterLinkDev></WebsiteRights>
        {/* </SocialMedia> */}
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer