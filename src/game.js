import React from 'react';              // Reactを読み込んでいる
import { Link } from 'react-router-dom';
import './background.css';

function game () {   // page2クラスにReact.Componentを継承する
        return (
            <div>
                game!!!
                <br/>
                <Link to="/">Go To home</Link>
            </div>
        );
}
export default game;                   // page2を出力する為に必要