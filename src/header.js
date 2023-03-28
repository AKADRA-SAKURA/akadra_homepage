import React from 'react';              // Reactを読み込んでいる
import { Link } from 'react-router-dom';
import './header.css';

function header () {   // page1クラスにReact.Componentを継承する
        return (
            <div className="nav_all">
                <div className="title">
                    <Link to="/" className="titlebox">AKADRA Archives</Link>
                </div>
                <div className="menu">
                    <Link to="/about" className="menubox">about</Link>
                    <Link to="/web" className="menubox">web</Link>
                    <Link to="/game" className="menubox">Game</Link>
                    <Link to="/dtm" className="menubox">DTM</Link>
                    <Link to="/graphic" className="menubox">Graphic</Link>
                    <Link to="/other" className="menubox">other</Link>
                </div>
            </div>
        );
    }
export default header;  