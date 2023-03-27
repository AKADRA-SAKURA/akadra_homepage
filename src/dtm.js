import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import axios from "axios";
import './background.css';
import './box_container.css';
import './dtm.css';


function dtm () {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://script.google.com/macros/s/AKfycbxklHYaKjDs5xo2Yt4wRhf2XW7HD4CbfHH8hL8Pu0brYa-fb2U7QebdrBv-zzqTQ24vGg/exec')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

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
                    <h2>Discography</h2>
                </div>
                <div className="dtm_all">
                    {data.map((d) => (
                        <div className="box">
                            <h1>{d.no}「{d.title}」</h1><hr/>
                                リリース日：{d.date}<br />
                                サークル名：{d.circle}<br /> 
                                アルバム名：{d.album}<br /> 
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
        );
}

export default dtm;