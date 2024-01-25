import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import './box_container.css';
import './home.css';



function home () {
    useEffect(() => {
        document.title =`AKADRA Archives`
      });
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
      
        return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2
             }}
          >
        <div className="bg">
            <div className="hello">
                <div className="hitokoto">
                    <h1>AKADRAの活動履歴<br/>
                        クリエイティブな活動を気ままに</h1>
                </div>

                <div className={`photo-block ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <div className="photo left"></div>
                    <div className="photo right"></div>
                    <div className="overlay">
                        <div className="text">Your Text Here</div>
                        <button className="button">Your Button</button>
                    </div>
                </div>

            </div>
        </div>
        </motion.div>
        );
    }
export default home;  