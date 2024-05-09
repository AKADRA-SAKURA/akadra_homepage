import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import axios from "axios";
import './box_container.css';
import './about.css';

import { createTheme } from '@mui/material/styles';


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
      document.title =`about | AKADRA Archives`;
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
                          <img className="profile-picture" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                          from あろす(<a href="https://twitter.com/Aros0408">@Aros0408</a>)<br/>
                          <Button variant="contained" size="large" theme={myTheme}><a href="https://github.com/AKADRA-SAKURA">Github</a></Button>
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
                                            <h3> 【所属】</h3>{data.map((d) => (<div>{d.belongs}</div>))}<br />
                                        </div>
                                        <hr />
                                        <div className="details">
                                            <h3>【趣味】</h3>{data.map((d) => (<div>{d.hobby}</div>))}<br />
                                            <h3>【好きなもの】</h3>{data.map((d) => (<div>{d.like}</div>))}<br />
                                            <h3>【推し：3次元　※記載なしは箱推し】</h3>{data.map((d) => (<div>{d.oshiJ}</div>))}<br />
                                            <h3>【推し：アニメ系】</h3>{data.map((d) => (<div>{d.oshiAni}</div>))}<br />
                                        </div>
                                        <hr />
                                        <div className="details">
                                            <h3>【言語】</h3>{data.map((d) => (<div>{d.language}</div>))}<br />
                                            <h3>【クラウド】</h3>{data.map((d) => (<div>{d.cloud}</div>))}<br />
                                            <h3>【DTM】</h3> {data.map((d) => (<div>{d.dtm}</div>))}<br />
                                            <h3>【その他KeyWord】</h3>{data.map((d) => (<div>{d.platform}</div>))}<br />
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