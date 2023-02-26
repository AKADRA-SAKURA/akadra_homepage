import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';
import './background.css';

class other extends React.Component {   //page2クラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                other!!!
                <br/>
                <Link to={`/`}>Go To home</Link>
            </div>
        );
    }
}
export default other;                   //page2を出力する為に必要