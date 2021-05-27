import React, { useState, useEffect, useRef, useContext } from 'react';
import playerContext from '../context/playerContext';

function Controls() {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
  } = useContext(playerContext);

  const audio = useRef('audio_tag');

  // self State
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  const skipBack = () => {
    let newTime = audio.current.currentTime - 15;
    setCurrentTime(newTime);
    audio.current.currentTime = newTime;
  };

  const skipForward = () => {
    let newTime = audio.current.currentTime + 15;
    setCurrentTime(newTime);
    audio.current.currentTime = newTime;
  };

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  return (
    <div className="controls">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        integrity="sha512-u7ppO4TLg4v6EY8yQ6T6d66inT0daGyTodAi6ycbw9+/AU8KMLAF7Z7YGKPMRA96v7t+c7O1s6YCTGkok6p9ZA=="
        crossorigin="anonymous"
      />
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songs[currentSong][3]}
      />

      {/* <div class="Controls-box"> */}
      <div class="Controls-body">
        <div class="controls-left">
          <span className="skip-back" onClick={skipBack}>
            <img src="./icons/Reload-backward.png"></img>
          </span>

          <span className="prev" onClick={prevSong}>
            <img src="./icons/Previous.png"></img>
          </span>
        </div>
        <div class="controls-middle">
          <span
            className="play"
            onClick={() => {
              togglePlaying();
              toggleAudio();
            }}
          >
            <span className={!playing ? '' : 'hide'}>
              <img className="Playbutton" src="./icons/Play.png"></img>
            </span>
            <span className={!playing ? 'hide' : ''}>
              <img src="./icons/Pause.png"></img>
            </span>
          </span>
        </div>
        <div class="controls-right">
          <span className="next" onClick={nextSong}>
            <img src="./icons/Arrowsideright.png"></img>
          </span>
          <span className="skip-forward" onClick={skipForward}>
            <img src="./icons/Reload-backward.png"></img>
          </span>
        </div>

        <div class="controls-progres">
          {/* <div className="vlme">
                <span className="volum"><i className="fas fa-volume-down"></i></span>
                <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e) => handleVolume(e.target.value / 100)} />
              </div> */}
          <div className="progressBar">
            <span className="currentT">{fmtMSS(currentTime)}</span>
            <input
              onChange={handleProgress}
              value={dur ? (currentTime * 100) / dur : 0}
              type="range"
              name="progresBar"
              id="prgbar"
            />
            <span className="totalT">{fmtMSS(dur)}</span>
          </div>
        </div>
      </div>
      {/* </div>  */}
    </div>
  );
}

export default Controls;
