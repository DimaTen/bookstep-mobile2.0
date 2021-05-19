import React from "react";
import Header from "./components/graphics/Header";
import Graphics from "./components/graphics/Graphics";
import Playlist from "./components/playlist/Playlist";
import Actions from "./components/playlist/Actions";
import Controls from "./components/Controls";
import PlayerState from "./context/PlayerState";
import input from "./input.css";
import main from "./main.css";

function AudioPlayer() {
  return (
    <PlayerState>
      <div class="Player-box">
        <div class="Player-body">
          <div class="player-header">
            <Header />
          </div>
          <div class="player-controls-middle">
            <Controls />
          </div>
          <div class="player-banner">
            <h1>this is Banner</h1>
          </div>
          <div class="player-playlist">
            <Playlist />
          </div>
        </div>

        <div class="Player-background">
          <Graphics />
        </div>
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;