import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import axios from "axios";
import './background.css';
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3
           }}
        >
            <div className="bg">
                <div className="hitokoto">
                    <h2>Webサイト制作物</h2>
                </div>
                <div className="web_all">
                    {data.map((d) => (
                        <div className="box">
                            <h1>{d.no}：「{d.title}」</h1><hr/>
                            <div className='hidari'>
                                <Button variant="contained" size="large" theme={myTheme}><a href={d.url}>URL</a></Button>
                            </div>
                            <div className='migi'>
                                <h3>{d.summary}</h3>
                                使用言語：{d.language}<br />
                                チーム人数：{d.people}<br /> 
                                役割：{d.role}<br /> 
                                説明：{d.detail}<br /> 
                                <Button variant="contained" size="large" theme={myTheme}><a href={d.githuburl}>Github URL</a></Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
        );
    }

export default web;