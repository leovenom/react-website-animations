import React, {useState} from 'react'
import DropDown from '../components/DropDown/DropDown';
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import '../components/Tour/Tour.css';
import GlobalStyle from '../globalStyles';
import ScrollToTop from '../components/ScrollToTop';
// import {TourLine}from '../data/TourData';



import { ReactComponent as AmericaIcon } from "../images/globe-americas-solid.svg"
import { ReactComponent as ShipIcon } from "../images/ship-solid.svg"
import { ReactComponent as EuropeIcon } from "../images/globe-europe-solid.svg"
import { ReactComponent as ArchwayIcon } from "../images/archway-solid.svg"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Tour = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <NavbarAbout toggle={toggle}/>
      <div className="hero-tour">
        <h1 className="title">Reisebegleitung: Weltweit</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#06d6a0', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #06d6a0' }}
          iconStyle={{ background: '#06d6a0', color: '#fff' }}
          icon={<AmericaIcon />}
        >
          <h3 className="vertical-timeline-element-title">Südamerika</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>
          Brasilien, Argentinien, Chile, Peru, Ecuador, Kolumbien, Bolivien 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#0a8f6b', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #0a8f6b' }}
          iconStyle={{ background: '#0a8f6b', color: '#fff' }}
          icon={<EuropeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Nordeuropa</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>
          Norwegen, Schweden, Island, Spitzbergen, Grönland, England, Schottland, Irland, Ostsee-Anrainer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f9c74f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #f9c74f' }}
          iconStyle={{ background: '#f9c74f', color: '#fff' }}
          icon={<ArchwayIcon  />}
        >
          <h3 className="vertical-timeline-element-title">Sonstige</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>
          Marokko, Portugal, Spanien, Schweiz, Deutschland, Madagaskar, Arktis, Antarktis, Karibik
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2867e6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2867e6' }}
          iconStyle={{ background: '#2867e6', color: '#fff' }}
          icon={<ShipIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kreuzfahrten</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>
          Weltweit
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
      <Footer />
    </>
  )
}

export default Tour
