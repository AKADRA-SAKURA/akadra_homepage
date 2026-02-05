import React, {useEffect, useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './box_container.css';
import './home.css';



function home () {
    useEffect(() => {
        document.title =`AKADRA Archives`
      });
    
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf = null;

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.setTransform(dpr,0,0,dpr,0,0);
        }

        let t = 0;
        const shapes = Array.from({length:8}).map((_,i)=>({
            x: Math.random()*window.innerWidth,
            y: Math.random()*window.innerHeight,
            r: Math.random()*60+20,
            s: (Math.random()*0.8+0.2)*(i%2?1:-1),
            hue: i*40
        }));

        function draw() {
            const w = window.innerWidth, h = window.innerHeight;
            ctx.clearRect(0,0,w,h);
            // subtle vignette
            const g = ctx.createLinearGradient(0,0,0,h);
            g.addColorStop(0,'rgba(0,0,0,0.0)');
            g.addColorStop(1,'rgba(0,0,0,0.25)');
            ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

            shapes.forEach((sh,i)=>{
                const ang = t*0.001*sh.s + i;
                const cx = (sh.x + Math.sin(t*0.0006+i)*120)%w;
                const cy = (sh.y + Math.cos(t*0.0009+i)*80)%h;
                ctx.save();
                ctx.translate(cx,cy);
                ctx.rotate(ang);
                const grad = ctx.createLinearGradient(-sh.r,-sh.r,sh.r,sh.r);
                grad.addColorStop(0, `hsla(${(sh.hue+60)%360},90%,65%,0.14)`);
                grad.addColorStop(1, `hsla(${(sh.hue+200)%360},85%,58%,0.06)`);
                ctx.fillStyle = grad;
                // draw polygon
                ctx.beginPath();
                const sides = 3 + (i%4);
                for(let k=0;k<sides;k++){
                    const a = (k/sides)*Math.PI*2;
                    const rr = sh.r * (0.6 + 0.4*Math.sin(a*3 + t*0.002));
                    const x = Math.cos(a)*rr;
                    const y = Math.sin(a)*rr;
                    if(k===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });

            t++;
            raf = requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener('resize', resize);
        raf = requestAnimationFrame(draw);

        return ()=>{
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(raf);
        };
    },[]);
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
            <div className="geometric-blob" style={{top:'8%', left:'6%'}}></div>
            <div className="geometric-blob" style={{bottom:'12%', right:'8%', width:220, height:220}}></div>
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
                            <Link to="/about" ><button className="button cosmic-glass">about</button></Link>
                            <div className="over_text">AKADRAについて</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredWeb ? 'hovered' : ''}`} onMouseEnter={handleHoverWeb} onMouseLeave={handleHoverWeb}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/digdea.PNG`} alt="digdea" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/web" ><button className="button cosmic-glass">Programming</button></Link>
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
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/crossdx.jpg`} alt="オリガミクロスバトルDX" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/game" ><button className="button cosmic-glass">Game</button></Link>
                            <div className="over_text">ゲーム制作記録</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredDtm ? 'hovered' : ''}`} onMouseEnter={handleHoverDtm} onMouseLeave={handleHoverDtm}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/dtm" ><button className="button cosmic-glass">DTM</button></Link>
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
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/ugomemo_01.jpg`} alt="うごメモおえかきゾロア" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/graphic" ><button className="button cosmic-glass">Graphic</button></Link>
                            <div className="over_text">おえかき展示場所</div>
                        </div>
                    </div>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredYoutube ? 'hovered' : ''}`} onMouseEnter={handleHoverYoutube} onMouseLeave={handleHoverYoutube}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <Link to="/youtube" ><button className="button cosmic-glass">Youtube</button></Link>
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
                            <Link to="/other" ><button className="button cosmic-glass">Other</button></Link>
                            <div className="over_text">その他の活動<br />ダンスなど</div>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <a class="twitter-timeline" data-lang="ja" data-theme="dark" href="https://twitter.com/akadra_music?ref_src=twsrc%5Etfw">Posts by akadra_music</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>

                <div className='summary_box'>
                    <div className={`photo-block ${isHoveredYoutube ? 'hovered' : ''}`} onMouseEnter={handleHoverYoutube} onMouseLeave={handleHoverYoutube}>
                        <img className="photo right" src={`${process.env.PUBLIC_URL}/akadra1.jpg`} alt="akadraサムネ" onselectstart="return false;" onmousedown="return false;"/>  
                        <div className="overlay">
                            <a href="https://blog-akadra-cometdays9.hatenablog.com/" target="_blank"><button className="button cosmic-glass">AKADRA's DIARY</button></a>
                            <div className="over_text">ブログです</div>
                        </div>
                        <div className="photo left">
                            <div className="text">Blog</div>
                        </div>
                    </div>
                </div>                  
            </div>
        </div>
        </motion.div>
        );
    }
export default home;  