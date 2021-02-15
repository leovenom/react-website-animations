import React, {useState, useRef} from 'react'
import { Button } from '../Button/ButtonElements'
import { HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImage, HeroContent, Arrow, SliderButtons, PrevArrow, NextArrow } from './HeroElements'


const Hero = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeOut = useRef(null)

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent(current => (current === length -1 ? 0 : current + 1))
  //   }

  //   timeOut.current = setTimeout(nextSlide, 8000)
  //   return  function () {
  //     if(timeOut.current) {
  //       clearTimeout(timeOut.current)
  //     }
  //   }
  // }, [current, length])

  const nextSlide = () =>  {
    if(timeOut.current) {
      clearTimeout(timeOut.current)
    }
    setCurrent(current === length -1 ? 0 : current + 1)
  };

  const prevSlide = () =>  {
    if(timeOut.current) {
      clearTimeout(timeOut.current)
    }
    setCurrent(current === 0 ? length -1 : current -1)
  };

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt}/>
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <h2>{slide.subtitle}</h2>
                      <p>{slide.price}</p>
                      {/* <Button
                        to={slide.path} 
                        primary='true'
                        css={`max-width: 160px;`}
                        alt="Buy now" 
                        title="Buy now"
                      >
                        {slide.label}
                        <Arrow />
                      </Button> */}
                    </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} alt="Previous slide" title="Previous slide"/>
          <NextArrow onClick={nextSlide} alt="Next slide" title="Next slide"/>
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
