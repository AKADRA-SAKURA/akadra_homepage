import React, { useEffect }  from 'react';
import axios from "axios";
import './box_container.css';
import './about.css';
import './background.css';

function about() {
    useEffect(() => {
      axios.get('https://script.google.com/macros/s/AKfycbyhxVnXPw5npWXtGUX_Wlun1_iAToA2JlXxm2WPgBbm1_UVsOR5Ilg784qkCQJSnKVL/exec')
        .then(response => {
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
                                            所属<br />
                                        </div>
                                        <hr/>
                                        <div className="details">
                                            趣味：<br />
                                            好きなもの：<br />
                                            言語：<br />
                                            ツール<br />
                                            プラットフォーム：<br />
                                            DTM: <br />
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



// class about extends React.Component {   //page2クラスにReact.Componentを継承する
//     render() {   
//         useEffect(() => {
//             axios.get('https://script.google.com/macros/s/AKfycbyhxVnXPw5npWXtGUX_Wlun1_iAToA2JlXxm2WPgBbm1_UVsOR5Ilg784qkCQJSnKVL/exec')
//               .then(response => {
//                 console.log(response.data);
//               })
//               .catch(error => {
//                 console.log(error);
//               });
//           }, []);
//         return (
//             <div class="bg">
//                 <div class="about_all">
//                     <div class="hidari">
//                         <div class="photo box">
//                             プロフ画像<br/>
//                             from あろす(@Aros0408)<br/>
//                             <a href="https://github.com/AKADRA-SAKURA">Githubアカウント</a>
//                         </div>

//                     </div>

//                     <div class="migi">
//                         <div class="profile box">
//                                 <div class="list" >
//                                     <div class="websitebox">
//                                         <div class="detailbox">
//                                         <h2>AKADRA</h2>
//                                         <hr/>
//                                         <div class="belongs">
//                                             所属<br />
//                                         </div>
//                                         <hr/>
//                                         <div class="details">
//                                             趣味：<br />
//                                             好きなもの：<br />
//                                             言語：<br />
//                                             ツール<br />
//                                             プラットフォーム：<br />
//                                             DTM: <br />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default about;                   //page2を出力する為に必要