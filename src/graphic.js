import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import './background.css';
import './box_container.css';
import './graphic.css';
import photosData from "./photosData";
 

function graphic () {
        useEffect(() => {
          document.title =`Graphics | AKADRA Archives`
        })
        return (
            <motion.div
            animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: 100,
                opacity: 0
              }}
              exit={{
                x: -100,
                opacity: 0
              }}
              transition={{
                duration: 2
              }}
          >
            <div className="bg">
                <div className="hitokoto">
                    <h2>お絵かき</h2>
                </div>
                <div className="graphic_all">
                  <div className="photo-grid">
                    {photosData.map((photo) => (
                      <div key={photo.id} className="photo-item">
                        <img src={photo.src} alt={photo.alt} />
                        <div className="title-overlay">{photo.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            </motion.div>
        );
    }
export default graphic;