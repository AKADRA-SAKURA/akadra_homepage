import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import axios from "axios";

import './background.css';
import './box_container.css';
import { createTheme } from '@mui/material/styles';
import './game.css';


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

function game () {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://script.google.com/macros/s/AKfycbw4wNqKQHxyXDcgGs3C-XGUpjh2ht6p9qs-ziu0slavWtsJ3kpfO9bdMziLPSmWKOilqw/exec')
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
                    <h2>ゲーム制作物</h2>
                </div>
                <div className="game_all">
                    {data.map((d) => (
                        <div className="box">
                            <h1>{d.no}「{d.title}」</h1><hr/>
                            <div className='hidari'>
                                <Button variant="contained" size="large" theme={myTheme}><a href={d.url}>URL</a></Button>
                            </div>
                            <div className='migi'>
                                リリース年：{d.year}<br />
                                チーム名：{d.team}<br />
                                チーム人数：{d.people}<br />
                                開発期間：{d.period}<br /> 
                                リリース場所：{d.release}<br />
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
export default game;