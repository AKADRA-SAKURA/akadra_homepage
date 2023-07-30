import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import axios from "axios";

import './box_container.css';
import './dtm.css';


function dtm () {
    const [data, setData] = useState([]);

    useEffect(() => {
      document.title =`DTM | AKADRA Archives`;
      axios.get('https://script.google.com/macros/s/AKfycbxklHYaKjDs5xo2Yt4wRhf2XW7HD4CbfHH8hL8Pu0brYa-fb2U7QebdrBv-zzqTQ24vGg/exec')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

        return (
            <motion.div
            animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: 100,
                opacity: 0
              }}
              exit={{
                x: -100,
                opacity: 0
              }}
              transition={{
                duration: 2
              }}
          >
            <div className="bg">
                <div className="hitokoto">
                    <h2>Discography</h2>
                </div>
                <div className="dtm_all">
                  <div className="box">
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1553651842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, LucidaGrande,LucidaSansUnicode,LucidaSans,Garuda,Verdana,Tahoma,sansSerif', fontWeight: 100}}><a href="https://soundcloud.com/akadra7800" title="AKADRA" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>AKADRA</a> · <a href="https://soundcloud.com/akadra7800/sets/akadra-best-2016-2021" title="AKADRA BEST 2016-2021" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>AKADRA BEST 2016-2021</a></div>
                  </div>
                  <div className="box">
                    <iframe src="https://audius.co/embed/playlist/79RwABW?flavor=card" width="100%" height="480" allow="encrypted-media" style={{border: 'none'}}></iframe>
                  </div>

                  <h2 style={{textAlign: 'center'}}>コンピレーションアルバム</h2>

                    {data.map((d) => (
                        <div className="box">
                            <h1>{d.no}「{d.title}」</h1><hr/>
                                リリース日：{d.date}<br />
                                サークル名：{d.circle}<br /> 
                                アルバム名：{d.album}<br /> 
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
        );
}

export default dtm;