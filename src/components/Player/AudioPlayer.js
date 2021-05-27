import React from 'react';
import Header from './components/graphics/Header';
import Graphics from './components/graphics/Graphics';
import Playlist from './components/playlist/Playlist';
import Actions from './components/playlist/Actions';
import Controls from './components/Controls';
import PlayerState from './context/PlayerState';
import NewPlaylist from './components/playlist/NewPlaylist';
import './input.css';
import './main.css';
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
          {/* <div class="player-banner">    
              <p>banner</p>
          </div> */}
          <div class="player-playlist">
            {/* <NewPlaylist /> */}
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
