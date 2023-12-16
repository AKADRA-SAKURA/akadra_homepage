import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css';

class youtube extends React.Component {
  render() {
    const opts = {
      playerVars: {
        autoplay: 0,
      },
    };

    return (
        <YouTube
          videoId="XT3U7dp_Nfw" // 埋め込むYouTube動画のIDを指定
          opts={opts}
          onReady={this._onReady}
        />
    );
  }
}

export default youtube;