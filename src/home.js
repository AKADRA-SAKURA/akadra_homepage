import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './box_container.css';
import './home.css';



function home () {
    useEffect(() => {
        document.title =`AKADRA Archives`
      });
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);
    const [isHoveredWeb, setIsHoveredWeb] = useState(false);
    const [isHoveredGame, setIsHoveredGame] = useState(false);
    const [isHoveredDtm, setIsHoveredDtm] = useState(false);
    const [isHoveredGraphic, setIsHoveredGraphic] = useState(false);
    const [isHoveredYoutube, setIsHoveredYoutube] = useState(false);
    const [isHoveredOther, setIsHoveredOther] = useState(false);

    const handleHoverAbout = () => {
        setIsHoveredAbout(!isHoveredAbout);
    };
    const handleHoverWeb = () => {
        setIsHoveredWeb(!isHoveredWeb);
    };
    const handleHoverGame = () => {
        setIsHoveredGame(!isHoveredGame);
    };
    const handleHoverDtm = () => {
        setIsHoveredDtm(!isHoveredDtm);
    };
    const handleHoverGraphic = () => {
        setIsHoveredGraphic(!isHoveredGraphic);
    };
    const handleHoverYoutube = () => {
        setIsHoveredYoutube(!isHoveredYoutube);
    };
    const handleHoverOther = () => {
        setIsHoveredOther(!isHoveredOther);
    };
      
        return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
        <div className="bg">
            <div className="hello">
                <div className="hitokoto">
                    <h1>AKADRAの活動履歴<br/>
                        クリエイティブな活動を気ままに</h1>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredAbout ? 'hovered' : ''}`} onMouseEnter={handleHoverAbout} onMouseLeave={handleHoverAbout}>
                        <div className="photo left">
                            <div className="text">about</div>
                        </div>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/about" ><button className="button">about</button></Link>
                            <div className="over_text">AKADRAについて</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredWeb ? 'hovered' : ''}`} onMouseEnter={handleHoverWeb} onMouseLeave={handleHoverWeb}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/digdea.png`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/web" ><button className="button">Programming</button></Link>
                            <div className="over_text">Programming活動記録</div>
                        </div>
                        <div className="photo left">
                            <div className="text">web</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredGame ? 'hovered' : ''}`} onMouseEnter={handleHoverGame} onMouseLeave={handleHoverGame}>
                        <div className="photo left">
                            <div className="text">Game</div>
                        </div>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/crossdx.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/game" ><button className="button">Game</button></Link>
                            <div className="over_text">ゲーム制作記録</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredDtm ? 'hovered' : ''}`} onMouseEnter={handleHoverDtm} onMouseLeave={handleHoverDtm}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/dtm" ><button className="button">DTM</button></Link>
                            <div className="over_text">作曲活動記録</div>
                        </div>
                        <div className="photo left">
                            <div className="text">DTM</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredGraphic ? 'hovered' : ''}`} onMouseEnter={handleHoverGraphic} onMouseLeave={handleHoverGraphic}>
                        <div className="photo left">
                            <div className="text">Graphic</div>
                        </div>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/ugomemo_01.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/graphic" ><button className="button">Graphic</button></Link>
                            <div className="over_text">おえかき展示場所</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredYoutube ? 'hovered' : ''}`} onMouseEnter={handleHoverYoutube} onMouseLeave={handleHoverYoutube}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/youtube" ><button className="button">Youtube</button></Link>
                            <div className="over_text">Youtube・実況活動記録</div>
                        </div>
                        <div className="photo left">
                            <div className="text">youtube</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredOther ? 'hovered' : ''}`} onMouseEnter={handleHoverOther} onMouseLeave={handleHoverOther}>
                        <div className="photo left">
                            <div className="text">Other</div>
                        </div>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/other" ><button className="button">Other</button></Link>
                            <div className="over_text">その他の活動<br />ダンスなど</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        );
    }
export default home;  