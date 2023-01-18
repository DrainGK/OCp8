import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";


const Slider = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = slides.length;
  console.log(slides);
  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider" id="project">
      <button className="left-arrow" onClick={prevSlide}>
        <BsArrowLeftSquare/>
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <BsArrowRightSquare/>
      </button>

      {slides.map((obj, index) => {
        console.log(obj.infos);
        return (
          <div
            className={index === slideIndex ? "slide active" : "slide"}
            key={index}
          >
            {index === slideIndex && 
            <div className="img-container hover">
              <span>
                <h3>{obj.title} | {obj.date}</h3>
                <h4>{obj.languages}</h4>
                <p>{obj.infos}</p>
              </span>
              <img src={obj.img} alt={obj.title} className="image" />
            </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
