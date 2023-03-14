import React from "react";
import './Section.css'
import { useState, useEffect } from "react";

function Section(){

    const images = ['../src/assets/01.jpg','../src/assets/02.jpg','../src/assets/03.jpg','../src/assets/04.jpg']

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newIndex = (currentIndex + 1) % images.length;
          setCurrentImage(images[newIndex]);
          setCurrentIndex(newIndex);
        }, 2000);
        return () => clearInterval(intervalId);
      }, [currentIndex, images]);

    return(
        <div className="section-container">
           <img className="section-img" src={currentImage} />
        </div>
    )
}

export default Section