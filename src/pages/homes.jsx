import React, { useEffect, useState } from 'react';
import images from '../data/ImagesData';
import { SRLWrapper } from 'simple-react-lightbox';
import '../components/Homes/Home.css';
import Footer from '../components/Footer/Footer';
import NavbarAbout from '../components/NavbarAbout/NavbarAbout'
import GlobalStyle from '../globalStyles';
import DropDown from '../components/DropDown/DropDown';
import { debounce } from '../utilities/helpers';
import ScrollToTop from '../components/ScrollToTop';

const options = {
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: '#3f8fcd',
    iconPadding: '5px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    size: '30px'
  },
  caption: {
    showCaption: true,
    captionColor: '#FFFFFF',
    captionFontFamily: 'inherit',
    captionFontSize: 'inherit',
    captionFontStyle: 'inherit',
    captionFontWeight: 'inherit',
    captionTextTransform: 'inherit'
  }
}


const Homes = () => {
  const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

  useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  const navbarStyles = {
    // transition: '0.3s ease-in-out'
    transition: '0.8s all ease',
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      
      <GlobalStyle />
      <NavbarAbout toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <div className="tags" style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Landscape" tagActive={tag === 'Landscape' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Fauna and Flora" tagActive={tag === 'Fauna and Flora' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="People" tagActive={tag === 'People' ? true : false} handleSetTag={setTag} />
			</div>
      <ScrollToTop />
			<SRLWrapper options={options}>
				<div className="container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt={ image.description + ' (' + image.title + ')' } />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
      <Footer />
    </>
  )
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};


export default Homes
