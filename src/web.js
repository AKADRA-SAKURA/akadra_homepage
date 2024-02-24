import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import axios from "axios";

import './box_container.css';
import { createTheme } from '@mui/material/styles';
import './web.css';

const myTheme = createTheme({
    palette: {
      primary: {
        main: "#e0e0e0",
      },
      secondary: {
        main: "#424242",
      },
    },
  });

function web () {
    const [data, setData] = useState([]);


    useEffect(() => {
      document.title =`WEB SITE | AKADRA Archives`;
      axios.get('https://script.google.com/macros/s/AKfycby3qqVTyFrLBo5bVsUxCkm-rOH-mWhSkLTXEjy3PBdUGmRRZU1Dv7_qFwP76zjfuaIgdA/exec')
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
                    <h2>Webサイト制作物</h2>
                </div>
                <div className="web_all">
                    {data.map((d) => (
                        <div className="box">
                            <h1>{d.no}：「<a href={d.url}>{d.title}</a>」</h1><hr/>
                            <div className='w_flex'>
                                <div className="w_hidari photo box">
                                    <img
                                      className="profile-picture"
                                      src={`${process.env.PUBLIC_URL}/${d.photo}`}
                                      alt={d.title}
                                      onselectstart="return false;" onmousedown="return false;"
                                    />
                                </div>
                              <div className='w_migi'>
                                  <h3>{d.summary}</h3>
                                  使用言語：{d.language}<br />
                                  チーム人数：{d.people}<br /> 
                                  役割：{d.role}<br /> 
                                  説明：{d.detail}<br /> 
                                  {(() => {
                                    if (d.githuburl) {
                                      return <Button variant="contained" size="large" theme={myTheme}><a href={d.githuburl}>Github</a></Button>;
                                    } else {
                                      return null;
                                    }
                                  })()}
                                  <Button variant="contained" size="large" theme={myTheme}><a href={d.url}>公開先</a></Button>                                    
                                  </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
        );
    }

export default web;