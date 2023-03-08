import React from 'react';              // Reactを読み込んでいる
import { Link } from 'react-router-dom';
import './background.css';

function dtm () {   // page2クラスにReact.Componentを継承する
        return (
            <div>
                dtm!!!
                <br/>
                <Link to="/">Go To home</Link>
            </div>
        );
    }
export default dtm;                   // page2を出力する為に必要