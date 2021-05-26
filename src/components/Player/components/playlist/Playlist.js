import React, { useContext, useState } from 'react';
import playerContext from '../../context/playerContext';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';


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

  return (


    <div class="Playlist">

      <div class="playlist-left" id="playlist-scroll">
        <img src="./icons/Sidearrow-left.png"></img>
      </div>

      <div class="playlist-middle">
      <Swiper slidesPerView={15} spaceBetween={10} freeMode={true} pagination={{
        "clickable": true
      }} className="mySwiper">
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
      </Swiper>
      </div>

      <div class="playlist-right" id="playlist-scroll">
        <img src="./icons/Sidearrow-right.png"></img>
      </div>
    </div>
  );
}

export default Playlist;
