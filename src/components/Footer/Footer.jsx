import React from 'react'
// FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, SocialIconLink, SocialIcons,
import { FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, FooterLinkEmail } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Hajo</FooterLinkTitle>
                <FooterLink to='/about'>About</FooterLink>
                <FooterLink to='/Gallery'>Gallery</FooterLink>
                <FooterLink to='/Tour'>Tour</FooterLink>
                <FooterLink to='/shop'>Shop</FooterLink>
                {/* <FooterLink to='/'>Terms of Service</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
                <FooterLinkEmail href='https://wa.link/3t4h4q' target='_blank' >WhatsApp <FaWhatsapp /> </FooterLinkEmail>
                <FooterLink to='/'>+49 04121 7885496</FooterLink>
                <FooterLink to='/'>+49 0176 6345 5632</FooterLink>
                <FooterLinkEmail href={`mailto:hajo.lauenstein@t-online.de`}>hajo.lauenstein@t-online.de</FooterLinkEmail>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/video'>Video</FooterLink> 
                {/* <FooterLinkEmail href='//www.youtube.com/watch?v=2n6fxQqmwgE' target='_blank' title="Mystische Eiswelten Antarktis">Video</FooterLinkEmail> */}
                {/* <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink> */}
            </FooterLinkItems>
          </FooterLinkWrapper>

          {/* <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLinkEmail href='//www.youtube.com/watch?v=2n6fxQqmwgE' target='_blank' >Video</FooterLinkEmail>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper> */}
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Hajo
            </SocialLogo>
            <WebsiteRights>Hajo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer