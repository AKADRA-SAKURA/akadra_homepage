import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';
import './header.css';

class header extends React.Component {   //page1クラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div class="nav_all">
                <div class="title">
                    <Link to={`/`}>AKADRA's Archives</Link>
                </div>
                <div class="menu">
                    <Link to={`/about`} class="menubox">about</Link>
                    <Link to={`/web`} class="menubox">web</Link>
                    <Link to={`/game`} class="menubox">Game</Link>
                    <Link to={`/dtm`} class="menubox">DTM</Link>
                    <Link to={`/graphic`} class="menubox">Graphic</Link>
                    <Link to={`/other`} class="menubox">other</Link>
                </div>
            </div>
        );
    }
}
export default header;  