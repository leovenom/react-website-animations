import React, {useState} from 'react'
import DropDown from '../components/DropDown/DropDown';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import GlobalStyle from '../globalStyles';
import ScrollToTop from '../components/ScrollToTop';
// import {TourLine}from '../data/TourData';
import '../components/Tour/Tour.css';


import { ReactComponent as AmericaIcon } from "../images/globe-americas-solid.svg"
import { ReactComponent as ShipIcon } from "../images/ship-solid.svg"
import { ReactComponent as EuropeIcon } from "../images/globe-europe-solid.svg"
import { ReactComponent as ArchwayIcon } from "../images/archway-solid.svg"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Tour = () => {
  // let workIconStyles = { background: "#06D6A0" }
  // let schoolIconStyles = { background: "#2867e6" }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      {/* <div className="hero-tour">
        <h1 className="title">Tour: South America</h1>
        <VerticalTimeline>
          {TourLine.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div> */}


      <div className="hero-tour">
        <h1 className="title">Reisebegleitung: Weltweit</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: '#06d6a0', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  #06d6a0' }}
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
