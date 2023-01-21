import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class header extends React.Component {   //page1クラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <Link to={`/`}>AKADRA Archives</Link>
                <Link to={`/about`}>about</Link>
                <Link to={`/web`}>web</Link>
                <Link to={`/game`}>Game</Link>
                <Link to={`/dtm`}>DTM</Link>
                <Link to={`/graphic`}>Graphic</Link>
                <Link to={`/other`}>other</Link>
            </div>
        );
    }
}
export default header;  