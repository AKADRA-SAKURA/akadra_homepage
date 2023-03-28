import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
import axios from "axios";

import './background.css';
import './box_container.css';
import './other.css';
import YouTube from 'react-youtube';
import './youtube.css';



function other () {
    const [dataother, setData1] = useState([]);
    const [datadance, setData2] = useState([]);

    useEffect(() => {
    document.title =`other | AKADRA Archives`;
    const fetchData = async () => {
        const result1 = await axios.get("https://script.google.com/macros/s/AKfycbw2sFQTNZbr2Gy0H9GQbAcEFRuJRmWdZHnTixKvS_qpJuaQ8gkqemuv1u9XeRMtHYA7fw/exec");
        const result2 = await axios.get("https://script.google.com/macros/s/AKfycbwymn9dgm05cVF_irFpYjtyvj5qkCeTaor3zbCV21VCOLJrlqeIhHIseGzQp9I9-w/exec");
        setData1(result1.data);
        setData2(result2.data);
    };
    fetchData();
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
                    <h2>その他</h2>
                </div>
                <div className="other_all">
                    {dataother.map((d) => (
                        <div className="box">
                            <div className='Movie'>
                                <h1>{d.no}「{d.title}」</h1><hr/>
                                    <YouTube videoId={d.url} />
                                <div className=''>
                                    リリース年：{d.release}<br />
                                    チーム人数：{d.people}<br />
                                    役割：{d.role}<br /> 
                                    説明：{d.detail}<br /> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="other_all">
                    <div className="box">
                        <h2>ダンス経験 from パンドラ</h2><hr/>
                        {datadance.map((d) => (
                            <>{d.no}：{d.artist} / {d.title} &#40;{d.detail}&#41;<br/></>
                        ))}
                    </div>
                </div>
            </div>
            </motion.div>
        );
}
export default other;