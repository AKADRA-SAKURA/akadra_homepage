import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class header extends React.Component {   //page1クラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <Link to={`/about`}>Go To about</Link>
                <Link to={`/web`}>Go To web</Link>
                <Link to={`/game`}>Go To game</Link>
                <Link to={`/dtm`}>Go To dtm</Link>
                <Link to={`/graphic`}>Go To graphic</Link>
                <Link to={`/other`}>Go To other</Link>
            </div>
        );
    }
}
export default header;  