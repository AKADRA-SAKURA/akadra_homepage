import React from "react";
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

                <div className="nav hamburger">
                    <input id="drawer_input" className="drawer_hidden" type="checkbox"></input>               
                    <label for="drawer_input" className="drawer_open"><span></span></label>               
                    <nav className="nav_content">
                    <ul className="nav_list">
                        <li className="nav_item"><Link to="/about" className="menubox">about</Link></li>
                        <li className="nav_item"><Link to="/web" className="menubox">web</Link></li>
                        <li className="nav_item"><Link to="/game" className="menubox">Game</Link></li>
                        <li className="nav_item"><Link to="/dtm" className="menubox">DTM</Link></li>
                        <li className="nav_item"><Link to="/graphic" className="menubox">Graphic</Link></li>
                        <li className="nav_item"><Link to="/other" className="menubox">other</Link></li>
                    </ul>
                    </nav>
            
                </div>
            </div>
        );
    }
export default header;  