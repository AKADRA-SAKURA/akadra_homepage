import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

import './box_container.css';
import './graphic.css';
import photosData from "./photosData";
 
// キーを押したとき
$(window).on('keydown', function(e){
  var keyCode = e.keyCode;
  
  if(keyCode == 16 || keyCode == 44 || keyCode == 91 || keyCode == 92){
      $('img').hide();
      return false;
  }
});

// キーを離したとき
$(window).on('keyup', function(){
   $('img').show();
});


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
                        <img src= {`${process.env.PUBLIC_URL}/${photo.src}`} alt={photo.alt} onselectstart="return false;" onmousedown="return false;"/>
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