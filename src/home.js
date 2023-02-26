import React from 'react';
import { Button } from "@mui/material";
import './box_container.css';
import './home.css';
import './background.css';

import Yt from './youtube';

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

class home extends React.Component {   //page1クラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
        <div class="bg">
            <div class="hello">
                <div class="hitokoto">
                    <p>アーカイブサイトという立ち位置で、私AKADRAが制作したor参加したものをまとめたサイトになります。<br/>
                        プログラミング、DTM、ゲーム作品など。随時更新</p>
                </div>

                <div class="whatsnew box">
                    <h2>WHAT'S NEW</h2>
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

                <div class="twitter box">
                    <h2>Twitter</h2>
                    <hr/>
                    <a class="twitter-timeline" data-height="1000" data-theme="dark" href="https://twitter.com/akadra_music?ref_src=twsrc%5Etfw">Tweets by akadra_music</a>
                </div>

                <div class="youtube box">
                    <h2>Youtubeチャンネル</h2>
                    <hr/>
                    <h3><a href="https://www.youtube.com/@akadra">AKADRA Youtubeチャンネル</a></h3>
                    <Yt></Yt>
                </div>

                <div class="blog box">
                    <h2>ブログ</h2>
                    <hr/>
                    外部サイト「はてなブログ」にてブログをやっています。<br/>
                    <Button variant="contained" size="large" theme={myTheme}><a href="https://blog-akadra-cometdays9.hatenablog.com/">Go to 「AKADRA's DIARY」</a></Button>
                    <Button variant="contained" size="large" theme={myTheme}><a href="https://zeusuakaneblog.hatenablog.com/">Go to 「AKADRAのなぐりがき」</a></Button>
                </div>
            </div>

            <div class="area" >
                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div>
        </div>
        );
    }
}
export default home;  