import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "../../main.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper slidesPerView={4} spaceBetween={30} freeMode={true} pagination={{
  "clickable": true
}} className="mySwiper">
    <SwiperSlide src="">1</SwiperSlide>
 
  </Swiper>
    </>
  )
}