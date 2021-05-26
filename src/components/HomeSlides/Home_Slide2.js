import React from "react";

export default function Home_Slide2() {
  return (
    <div className="slide2">
      <div class="slide2-content">
        <div className="slide2-header">
          <h5>
            Lås upp nästa kapitel snabbare
            <br />
            tillsammans!
          </h5>
          <h4>Bilda ditt "team" idag och ha kul!</h4>
          <br />
          <a href="">
            <div className="slide2-button">
              <img src="./icons/Home_Slide2-button.svg" alt="button" />
            </div>
          </a>
        </div>

        <div className="box" id="slide2-box1"></div>
        <div className="box" id="slide2-box2"></div>
        <div className="slide2-team">
          <img src="./img/Slideshow-slide2-team.svg" alt="team" />
        </div>
      </div>
    </div>
  );
}
