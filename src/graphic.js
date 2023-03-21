import React from 'react';
import { motion } from 'framer-motion';
import './background.css';
import './box_container.css';
import './graphic.css';

function graphic () {
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
                    工事中
                </div>
            </div>
            </motion.div>
        );
    }
export default graphic;