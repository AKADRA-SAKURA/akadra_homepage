import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css';

class youtube extends React.Component {
    render(){
      return(
        <YouTube videoId="https://youtu.be/SfsufEZlv4w" />
      )
    }
}

export default youtube;
