import React, { useContext } from "react";
import playerContext from "../../context/playerContext";

export default function Header() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <header class="chapterName">
      <div class="container-title">
        <h2 class="title">{songs[currentSong][0]}</h2>
      </div>
      <div class="container-author">
        <h3 class="author">Av {songs[currentSong][1]}</h3>
      </div>
      <div class="container-chapter">
        <h3 class="chapter">Chapter: {songs[currentSong][2]}</h3>
      </div>
    </header>
  );
}
