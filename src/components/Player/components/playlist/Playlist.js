import React, { useContext, useState } from 'react';
import playerContext from '../../context/playerContext';
import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';
// import TotalSteps from "../../../TotatalSteps";

function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext);
  const [totalSteps, setTotalSteps] = useState(0);

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const checkSteps = (i) => {
    if (totalSteps >= 10000) {
      console.log(totalSteps);
      SetCurrent(i);
    } else {
      alert('Du behöver gå fler steg för att låsa upp nästa kapitel');
    }
  };

  return (
    // <div class="swiper-container">
    // <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"></link>
    //   <div class="swiper-wrapper">
    //   <div class="swiper-slide">Slide 1</div>
    //   <div class="swiper-slide">Slide 2</div>
    //   <div class="swiper-slide">Slide 3</div>
    //   <div class="swiper-slide">Slide 4</div>
    //   <div class="swiper-slide">Slide 5</div>
    //   <div class="swiper-slide">Slide 6</div>
    //   <div class="swiper-slide">Slide 7</div>
    //   <div class="swiper-slide">Slide 8</div>
    //   <div class="swiper-slide">Slide 9</div>
    //   <div class="swiper-slide">Slide 10</div>

    //   </div>
    //   {/* <!-- Add Pagination --> */}
    //   <div class="swiper-pagination"></div>
    //   {/* Add Arrows */}
    //   <div class="swiper-button-next"></div>
    //   <div class="swiper-button-prev"></div>
    // </div>

    <div class="Playlist">
      <div class="playlist-left" id="playlist-scroll">
        <img src="./icons/Sidearrow-left.png"></img>
      </div>
      <div class="playlist-middle">
        <div className="songlist">
          {/* <TotalSteps setTotalSteps={setTotalSteps} /> */}
          <ul className="loi">
            {songs.map((song, i) => (
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
            ))}
          </ul>
        </div>
      </div>
      <div class="playlist-right" id="playlist-scroll">
        <img src="./icons/Sidearrow-right.png"></img>
      </div>
    </div>
  );
}

export default Playlist;
