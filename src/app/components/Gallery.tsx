"use client"

import React, { useState } from 'react'
import Button from "../Utills/Button";


const Gallery = () => {


  // Array of image sources from Cloudinary
  const images = [
    "https://res.cloudinary.com/dxifsuz6o/image/upload/v1734695328/im1_cdw4ic.png",
    "https://res.cloudinary.com/dxifsuz6o/image/upload/v1734695329/im2_paha6c.png",
    "https://res.cloudinary.com/dxifsuz6o/image/upload/v1734695329/im3_xmp8s7.png",
    "https://res.cloudinary.com/dxifsuz6o/image/upload/v1734695327/im4_nxklre.png",
    "https://res.cloudinary.com/dxifsuz6o/image/upload/v1734695328/im6_ofuph3.png",
  ];


  // State to track whether all images are shown
  const [showAll, setShowAll] = useState(false);




  return (

    <section className="flex flex-col items-center justify-center mb-32 sm:mb-16 md:mb-32 gap-12">


      <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-graphik text-center mb-2 whitespace-nowrap">
          GALLERY
        </h1>
        <p className="font-graphik text-sm sm:text-base md:text-lg text-center text-white">
          We focus on ergonomics and meeting you where you work.
        </p>
        <p className="font-graphik text-sm sm:text-base md:text-lg text-center text-white max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] whitespace-nowrap">
          It's only a keystroke away.
        </p>
      </div>



      <div className="px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto">

        <div
          className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center"
        >
          {images
            .slice(0, showAll ? images.length : 3)
            .map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-[150px] rounded-lg object-cover"
              />
            ))}
        </div>
      </div>


      <Button
        text={showAll ? 'Show Less' : 'Show More'}
        onClick={() => setShowAll(!showAll)}
      />
   


    </section>
  );
};

export default Gallery;
