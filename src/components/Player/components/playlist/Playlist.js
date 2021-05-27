import React, { useContext,  useRef, useState } from 'react';

import playerContext from '../../context/playerContext';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.css';


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../../main.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation,Virtual
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,Virtual]);

function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext);
  const [totalSteps, setTotalSteps] = useState(0);

  const checkSteps = (i) => {
    if (totalSteps >= 10000) {
      console.log(totalSteps);
      SetCurrent(i);
    } else {
      alert('Du behöver gå fler steg för att låsa upp nästa kapitel');
    }
  };

  const virtual = {
    "slides": (function () {
            var slides = [];
            for (var i = 0; i < 600; i += 1) {
              slides.push('Slide ' + (i + 1));
            }
            return slides;
          })()
  }

  const swiperRef = useRef(null);

  let appendNumber = 600;
  let prependNumber = 1;

  const prepend = () => {
    swiperRef.current.swiper.virtual.prependSlide([
      'Slide ' + (--prependNumber),
      'Slide ' + (--prependNumber)
    ]);
  }

  const append = () => {
    swiperRef.current.swiper.virtual.appendSlide('Slide ' + (++appendNumber));
  }

  const slideTo = (index) => {
    swiperRef.current.slideTo(index - 1, 0);
  }




  return (


    <div class="Playlist">
      <div className="swiper-container">
        <div class="playlist-middle">
        <Swiper slidesPerView={6.5}  freeMode={true}hashNavigation={{
          "watchState": true
        }} p navigation={true} className="mySwiper">
          <div className="swiper-slides">
          <ul className="loi">
              {songs.map((song, i) => (
              <SwiperSlide src>
                <li
                  className={
                    'songContainer ' + (currentSong === i ? 'selected' : '')
                  }
                  key={i}
                  onClick={() => {
                    checkSteps(i);
                  }}
                >
                  <div id="chapter-icon">
                    <span className="song">{song[2]}</span>
                  </div>
                </li>
              </SwiperSlide>
              ))} 
            </ul>
          </div>
          
        </Swiper>
        </div>
      </div>

      <div class="swiper-button-prev-unique">
      
      </div>
      <div class="swiper-button-next-unique"></div>
    </div>

  );
}

export default Playlist;
