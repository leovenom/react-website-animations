import React, {useState} from 'react'
import DropDown from '../components/DropDown/DropDown';
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import '../components/Tour/Tour.css';
import GlobalStyle from '../globalStyles';
import ScrollToTop from '../components/ScrollToTop';

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
        <h1 className="title">Reisebegleitung</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6B7EA2', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #6B7EA2' }}
          iconStyle={{ background: '#394D6E', color: '#fff' }}
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
          contentStyle={{ background: '#6B7EA2', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #6B7EA2' }}
          iconStyle={{ background: '#394D6E', color: '#fff' }}
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
          contentStyle={{ background: '#6B7EA2', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #6B7EA2' }}
          iconStyle={{ background: '#394D6E', color: '#fff' }}
          icon={<ArchwayIcon  />}
        >
          <h3 className="vertical-timeline-element-title">Sonstige</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>
          Arktis, Antarktis, Südsee, Karibik, Namibia, Marokko, Usbekistan, Jordanien, Madagaskar, Portugal, Spanien, Makaronesische Inseln.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6B7EA2', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #6B7EA2' }}
          iconStyle={{ background: '#394D6E', color: '#fff' }}
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
