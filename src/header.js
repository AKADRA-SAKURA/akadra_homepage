import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  // ハンバーガーメニューを閉じる関数
  const closeMenu = () => {
    const drawerInput = document.getElementById('drawer_input');
    drawerInput.checked = false;
  };

  return (
    <div className="nav_all">
      <div className="title">
        <Link to="/" className="titlebox">AKADRA Archives</Link>
      </div>
      <div className="menu">
        <Link to="/about" className="menubox" onClick={closeMenu}>about</Link>
        <Link to="/web" className="menubox" onClick={closeMenu}>web</Link>
        <Link to="/game" className="menubox" onClick={closeMenu}>Game</Link>
        <Link to="/dtm" className="menubox" onClick={closeMenu}>DTM</Link>
        <Link to="/graphic" className="menubox" onClick={closeMenu}>Graphic</Link>
        <Link to="/youtube" className="menubox" onClick={closeMenu}>Youtube</Link>        
        <Link to="/other" className="menubox" onClick={closeMenu}>other</Link>
      </div>

      <div className="nav hamburger">
        <input id="drawer_input" className="drawer_hidden" type="checkbox" />
        <label htmlFor="drawer_input" className="drawer_open"><span></span></label>
        <nav className="nav_content">
          <ul className="nav_list">
            <li className="nav_item"><Link to="/about" className="menubox" onClick={closeMenu}>about</Link></li>
            <li className="nav_item"><Link to="/web" className="menubox" onClick={closeMenu}>Programming</Link></li>
            <li className="nav_item"><Link to="/game" className="menubox" onClick={closeMenu}>Game</Link></li>
            <li className="nav_item"><Link to="/dtm" className="menubox" onClick={closeMenu}>DTM</Link></li>
            <li className="nav_item"><Link to="/graphic" className="menubox" onClick={closeMenu}>Graphic</Link></li>
            <li className="nav_item"><Link to="/youtube" className="menubox" onClick={closeMenu}>Youtube</Link></li>            
            <li className="nav_item"><Link to="/other" className="menubox" onClick={closeMenu}>other</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;