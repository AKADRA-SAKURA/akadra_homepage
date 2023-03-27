import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import axios from "axios";
import './box_container.css';
import './about.css';
import './background.css';
import { createTheme } from '@mui/material/styles';
import akadra1 from './images/akadra1.jpg'; 

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

function about() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://script.google.com/macros/s/AKfycbyhxVnXPw5npWXtGUX_Wlun1_iAToA2JlXxm2WPgBbm1_UVsOR5Ilg784qkCQJSnKVL/exec')
        .then(response => {
          setData(response.data);
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
                    <h2>プロフィール</h2>
                </div>
                <div className="about_all">
                    <div className="hidari_about">
                        <div className="photo box">
                            <img className="profile-picture" src={akadra1} alt="akadra" />
                            from あろす(<a href="https://twitter.com/Aros0408">@Aros0408</a>)<br/>
                            <Button variant="contained" size="large" theme={myTheme}><a href="https://github.com/AKADRA-SAKURA">Githubアカウント</a></Button>
                        </div>

                    </div>

                    <div className="migi_about">
                        <div className="profile box">
                            <div className="list">
                                <div className="websitebox">
                                    <div className="detailbox">
                                        <h2>AKADRA</h2>
                                        <hr />
                                        <div className="belongs">
                                            【所属】{data.map((d) => (<div>{d.belongs}</div>))}<br />
                                        </div>
                                        <hr />
                                        <div className="details">
                                            【趣味】{data.map((d) => (<div>{d.hobby}</div>))}<br />
                                            【好きなもの】{data.map((d) => (<div>{d.like}</div>))}<br />
                                            【言語】{data.map((d) => (<div>{d.language}</div>))}<br />
                                            【ツール】{data.map((d) => (<div>{d.cloud}</div>))}<br />
                                            【プラットフォーム】{data.map((d) => (<div>{d.platform}</div>))}<br />
                                            【DTM】 {data.map((d) => (<div>{d.dtm}</div>))}<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
    );
  }
  
  export default about;


//   {data.length > 0 && data[0].hobby}