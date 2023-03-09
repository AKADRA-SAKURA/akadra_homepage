import React, { useEffect, useState }  from 'react';
import axios from "axios";
import './box_container.css';
import './about.css';
import './background.css';

function about() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://script.google.com/macros/s/AKfycbyhxVnXPw5npWXtGUX_Wlun1_iAToA2JlXxm2WPgBbm1_UVsOR5Ilg784qkCQJSnKVL/exec')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
            <div className="bg">
                <div className="about_all">
                    <div className="hidari">
                        <div className="photo box">
                            プロフ画像<br/>
                            from あろす(@Aros0408)<br/>
                            <a href="https://github.com/AKADRA-SAKURA">Githubアカウント</a>
                        </div>

                    </div>

                    <div className="migi">
                        <div className="profile box">
                                <div className="list" >
                                    <div className="websitebox">
                                        <div className="detailbox">
                                        <h2>AKADRA</h2>
                                        <hr/>
                                        <div className="belongs">
                                            【所属】{data.map((d) => ( <div>{d.belongs}</div>))}<br />
                                        </div>
                                        <hr/>
                                        <div className="details">
                                            【趣味】{data.map((d) => ( <div>{d.hobby}</div>))}<br />
                                            【好きなもの】{data.map((d) => ( <div>{d.like}</div>))}<br />
                                            【言語】{data.map((d) => ( <div>{d.language}</div>))}<br />
                                            【ツール】{data.map((d) => ( <div>{d.cloud}</div>))}<br />
                                            【プラットフォーム】{data.map((d) => ( <div>{d.platform}</div>))}<br />
                                            【DTM】 {data.map((d) => ( <div>{d.dtm}</div>))}<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
  
  export default about;


//   {data.length > 0 && data[0].hobby}