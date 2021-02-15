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

      <div className="hero-tour2">
        <h1 className="title">Vorträge und Lektorate</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: '#06d6a0', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  #06d6a0' }}
          iconStyle={{ background: '#fc8621', color: '#fff' }}
          icon={<AmericaIcon />}
        >
          <h3 className="vertical-timeline-element-title">Südamerika, Mittelamerika, Karibik und andere Länder </h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p></p>
          <li>Die wundersame Geschichte Brasiliens</li>
          <li>Naturwunder Brasiliens</li>
          <li>Orinoco und Amazonas </li>
          <li>Samba Brasil – Tango Argentino (zwei Nationen, zweiTänze)</li>
          <li>Argentinien, Paraguay, Uruguay – drei Länder drei Wege</li>
          <li>Argentinien – Chile …Portrait einer Hassliebe (ironisch nachdenkliche Betrachtung zweier Nachbarn)</li>
          <li>Naturwunder Südamerikas</li>
          <li>Geologie Südamerikas (Hotspots, falsch herum fließende Flüsse, Decken und Falten)</li>
          <li>Geologie und Geografie von Madagaskar</li>
          <li>Geologie Ozeaniens</li>
          <li>Die Inkas und deren Vorkulturen</li>
          <li>Galapagos – Evolution aus erster Hand</li>
          <li>Auf den Spuren von Alexander von Humboldt</li>
          <li>Der Panamakanal - technisches Wunder, moralische Katastrophe</li>
          <li>Land- und Landausflugsbeschreibungen</li>
          <li>Kuba, was man weiß, was man wissen sollte</li>
          <li>Karibisches Potpourri</li>
          <li>Die Antillen</li>
          <li>Land- und Landausflugsbeschreibungen</li>
          <li>Saquenay - Fjord der Wale</li>
          <li>Geologie Alaskas</li>
          <li>Die Geologie der Nordwestpassage</li>
          <li>Geologie Kanadas</li>
          <li>Die Geologie der Anden</li>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#a7c5eb', color: '#fff' }}
          icon={<EuropeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Antarktis und Subantarktis</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p></p>
          <li>Die Eroberung des Südpols</li>
          <li>Forschung in der Antarktis</li>
          <li>Die Eroberung der Antarktis, abeits der bekannten Namen</li>
          <li>Die Falklandinseln - Zankapfel seit Jahrhunderten</li>
          <li>Geologie der Antarktis - Ein Spaziergang durch 3.8 Mia. Jahre</li>
          <li>Land- und Landausflugsbeschreibungen</li>
          <li>Shackleton und Nordenskjöld Expeditionen - alles was schiefgehen kann</li>
          <li>Menschen in der Antarktis</li>
          <li>Tierparadies subantarktische Inseln</li>
          <li>Antarktis - der neunte Planet</li>
          <li>Walfang in der Antarktis </li>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#16c79a', color: '#fff' }}
          icon={<AmericaIcon />}
        >
          <h3 className="vertical-timeline-element-title">Europa</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p></p>
          <li>Das Eishotel von Jukkasjärvi</li>
          <li>Geschichte und Geschichten Schottlands</li>
          <li>Spanien und Portugal - ein Gang durch die Geschichte</li>
          <li>Geschichte und Geschichten Irlands</li>
          <li>Die Azoren</li>
          <li>Die Kanaren</li>
          <li>Die Wikinger (Mythos und Forschung)</li>
          <li>Geologie Islands</li>
          <li>Geologie von Grossbritannien</li>
          <li>Spitzbergen – Naturerlebnis über dem Polarkreis</li>
          <li>Geologie und Landschaftslesen Spitzbergen</li>
          <li>Geologie und Bergbau Grönlands</li>
          <li>Die spinnen die Briten (Freundlich ironische Betrachtung eines  
  kauzigen Volkes)</li>
          <li>Russland und seine Zaren</li>
          <li>Baltikum (alles eins oder drei Länder ?)</li>
          <li>Über Trolle und Elfen (Norwegische Sagen)</li>
          <li>Geologie und Geografie Norwegens</li>
          <li>Die Hanse (eine Vereinigung die nie gegründet wurde)</li>
          <li>Menschen, Kunst und Kultur am Rhein</li>
          <li>Kleine Donaureise von der Quelle bis zur Mündung</li>
          <li>Kulinarische Donaureise</li>
          <li>Geologie der Nordsee</li>
          <li>Geologie der Ostsee</li>
          <li>So sind die Schweden</li>
          <li>Finnland und die Finnen</li>
          <li>Dänemark und die Dänen</li>
          <li>Schweden und Finnland - ein Vergleich</li>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#e27802', color: '#fff' }}
          icon={<EuropeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Allgemeine Themen</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p></p>
          <li>Darwin und die Evolution</li>
          <li>Gletscher</li>
          <li>Vulkanologie - Allgemein und Regional</li>
          <li>Hotspots - Wiegen der Evolution</li>
          <li>Seamounts und Vulkaninseln</li>
          <li>Einführung in die Geologie und Plattentektonik</li>
          <li>Landschaftsformer (Gletscher, Wasser und Wind)</li>
          <li>Feldspat, Quarz und Glimmer, die vergess ich nimmer – eine kleine Einführung in die Mineralogie</li>
          <li>Edle Steine, schöne Frauen, reiche Männer. (Geschichte und Geschichten über Edelsteine)</li>
          <li>Einführung in die Wetterkunde</li>
          <li>Piraten von der Antike bis heute</li>
          <li>Reise in Licht und Schatten (Ein Vortrag der ganz anderen Art)</li>
          <li>Reisequiz</li>
          <li>Kleiner Einblick in Loriots Werke (Lesung)</li>
          <li>Verschiedene Geschichten und Lesungen zum Thema Reisen</li>
          <li>Limerick-Dichten</li>
          <li>Die Entdeckung der Neuen Welt</li>
          <li>Geologie und Kunst - oder - Ist Geologie Kunst</li>
          <li>Die Geschichte der Geologie</li>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
      <Footer />
    </>
  )
}

export default Tour
