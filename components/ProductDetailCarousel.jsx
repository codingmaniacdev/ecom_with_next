"use client";

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';

const ProductDetailCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={60}
        className="productCarousel"
      >
        <img src="../assets/p1.png" />
        <img src="../assets/p2.png" />
        <img src="../assets/p3.png" />
        <img src="../assets/p4.png" />
        <img src="../assets/p5.png" />
        <img src="../assets/p6.png" />
        <img src="../assets/p7.png" />
      </Carousel>
    </div >
  )
}

export default ProductDetailCarousel