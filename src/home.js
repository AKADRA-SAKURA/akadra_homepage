import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import './box_container.css';
import './home.css';
import './background.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { createTheme } from '@mui/material/styles';
import Yt from './youtube';



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

function home () {
        return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2
             }}
          >
        <div className="bg">
            <div className="hello">
                <div className="hitokoto">
                    <h2>AKADRAが制作したor参加したものをまとめたサイト<br/>
                        プログラミング、DTM、ゲーム作品など。随時更新</h2>
                </div>

                <div className="toptopics">
                    <div className="hidari">
                        <div className="whatsnew box">
                            <h2>WHAT&apos;S NEW</h2>
                            <hr/>
                            2023.01 HPリニューアル<br/>
                            2022.12.28 other ダンス歴追加<br/>
                            2022.10.09 other ダンス歴追加<br/>
                            2022.9.10 Youtube欄追加<br/>
                            2021.7.8 プログラミングページ「CometDaysチャンネル」追加<br/>
                            2021.3.2 プログラミングページ「Qpic Virtual Festival」ゲームページ「オリガミダッシュ」追加<br/>
                            2021.1.2 新年あけましておめでとうございます！今年も創作をちまちま頑張ります！<br/>
                            2020.12.08 プログラミングページ「Digdea」追加<br/>
                            2020.10.27 ホームページを作成しました！<br/>
                        </div>

                        <div className="youtube box">
                            <h2>Youtubeチャンネル</h2>
                            <hr/>
                            <h3><a href="https://www.youtube.com/@akadra">AKADRA Youtubeチャンネル</a></h3>
                            <Yt />
                        </div>
                    </div>

                    <div className="migi">
                        <div className="twitter box">
                            <h2>Twitter</h2>
                            <hr/>
                            <TwitterTweetEmbed/>
                            <a className="twitter-timeline" data-height="500" data-width="100%" data-theme="dark" href="https://twitter.com/akadra_music?ref_src=twsrc%5Etfw">Tweets by akadra_music</a>
                        </div>
                        <div className="blog box">
                            <h2>ブログ</h2>
                            <hr/>
                            外部サイト「はてなブログ」にてブログをやっています。<br/>
                            <div className="btn">
                                <Button variant="contained" size="large" theme={myTheme}><a href="https://blog-akadra-cometdays9.hatenablog.com/">Go to 「AKADRA&apos;s DIARY」</a></Button>
                                <Button variant="contained" size="large" theme={myTheme}><a href="https://zeusuakaneblog.hatenablog.com/">Go to 「AKADRAのなぐりがき」</a></Button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="area" >
                <ul className="circles">
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                </ul>
            </div>
        </div>
        </motion.div>
        );
    }
export default home;  