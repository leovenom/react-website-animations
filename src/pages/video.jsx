import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import GlobalStyle from '../globalStyles';
import DropDown from '../components/DropDown/DropDown';
import ScrollToTop from '../components/ScrollToTop';


const Video = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <NavbarAbout toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      {/* <YouTube videoId="2n6fxQqmwgE" opts={opts}/> */}
      <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "52.90%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          width: "100%",
          height: "91%"          
        }}
        // src='https://www.youtube.com/embed/2n6fxQqmwgE?autoplay=1&'
        src="https://spark.adobe.com/video/nle6VfGpS8YWI/embed"
        // src={`https://www.youtube.com/embed/${youtubeId}`}
        frameborder='0'
        title='Mystische Eiswelten Antarktis'      
        />
    </div>
      <Footer />
    </>
  )
}
export default Video