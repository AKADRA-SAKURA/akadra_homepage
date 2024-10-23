import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import axios from "axios";
import './box_container.css';
import './about.css';
import 'https://kit.fontawesome.com/eead24412f.js';

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
                        </div>

                    </div>

                    <div className="migi_about">
                        <div className="profile box">
                            <div className="list">
                                <div className="websitebox">
                                    <div className="detailbox">
                                        <h1>AKADRA</h1>
                                        <hr />
                                        <h2>☆基本情報☆</h2>
                                        性別　：　♂️<br/>
                                        年齢　：　25↑<br/>
                                        <hr />
                                        <h2>☆メッセージ☆</h2>
                                        不定期にいろんなことをする人です。<br/>
                                        ゲーム実況、ダンス、作曲 etc<br/><br/>
                                        同担、他担OK、拒否なし<br/>
                                        推し活はそれぞれの無理のない範囲ですれば良いと思っています！<br/><br/>
                                        いろんなことを呟く人なので、そのへん理解ある方よろしくお願いします。<br/>
                                        <hr />
                                        <h2>☆リンク☆</h2>
                                        フォロー等お待ちしています☆<br/>
                                        <a href="https://x.com/akadra_music" class="btn btn-twitter">
                                          <span class="fab fa-twitter fa-fw"></span> X
                                        </a><br/>
                                        <a href="https://bsky.app/profile/akadrasakura.bsky.social" class="btn btn-bluesky">
                                          <span class="fa-brands fa-bluesky"></span> Bluesky
                                        </a><br/>
                                        <a href="https://www.youtube.com/channel/UCZs0p_9xe5eaOnZGD9HRmCg/" class="btn btn-youtube">
                                          <span class="fab fa-youtube fa-fw"></span> Youtube
                                        </a><br/>
                                        <a href="https://blog-akadra-cometdays9.hatenablog.com/" class="btn btn-blog">
                                          <i class="fa-solid fa-book-open"></i> ブログ
                                        </a><br/>
                                        <a href="https://www.youtube.com/channel/UCZs0p_9xe5eaOnZGD9HRmCg/" class="btn btn-youtube">
                                          <span class="fa-brands fa-instagram"></span> Instagram
                                        </a><br/>
                                        <a href="https://www.tiktok.com/@akadra.sakura7?lang=ja-JP" class="btn btn-tiktok">
                                          <span class="fa-brands fa-tiktok"></span> Tiktok
                                        </a><br/>
                                        <a href="https://github.com/AKADRA-SAKURA" class="btn btn-github">
                                          <span class="fa-brands fa-github"></span> Github
                                        </a><br/>
                                        <hr />
                                        <h2>☆いろんな情報☆</h2>
                                        <div className="belongs">
                                            <h3> 【所属】</h3>{data.map((d) => (<div>{d.belongs}</div>))}<br />
                                        </div>
                                        <div className="details">
                                            <h3>【趣味】</h3>{data.map((d) => (<div>{d.hobby}</div>))}<br />
                                            <h3>【好きなもの】</h3>{data.map((d) => (<div>{d.like}</div>))}<br />
                                            <h3>【推し：3次元　※記載なしは箱推し】</h3>{data.map((d) => (<div>{d.oshiJ}</div>))}<br />
                                            <h3>【推し：アニメ系】</h3>{data.map((d) => (<div>{d.oshiAni}</div>))}<br />
                                        </div>
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