import React from 'react';
import { motion } from 'framer-motion';
import './background.css';
import './box_container.css';
import './graphic.css';

function graphic () {
        return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3
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