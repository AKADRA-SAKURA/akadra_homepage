import React from 'react';
import axios from "axios";
import './box_container.css';
import './about.css';
import './background.css';
//https://script.google.com/macros/s/AKfycbyhxVnXPw5npWXtGUX_Wlun1_iAToA2JlXxm2WPgBbm1_UVsOR5Ilg784qkCQJSnKVL/exec






class about extends React.Component {   //page2クラスにReact.Componentを継承する
    render() {   
        axios.get('https://script.google.com/macros/s/AKfycbyhxVnXPw5npWXtGUX_Wlun1_iAToA2JlXxm2WPgBbm1_UVsOR5Ilg784qkCQJSnKVL/exec')
        .then(function (response) {
       // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          console.log(response);
        })
        .catch(function (error) {
       // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
        })
        .finally(function () {
       // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
       console.log('FIN');
        });

        return (
            <div class="bg">
                <div class="about_all">
                    <div class="photo box">
                    プロフ画像<br/>
                    from あろす(@Aros0408)<br/>
                    <a href="https://github.com/AKADRA-SAKURA">Githubアカウント</a>
                    </div>
                    <div class="profile box">
                        <div class="list" >
                            <div class="websitebox">
                                <div class="detailbox">
                                <h2>AKADRA</h2>
                                <hr/>
                                <div class="belongs">
                                    <a>所属</a><br />
                                </div>
                                <hr/>
                                <div class="details">
                                    <a>趣味：</a><br />
                                    <a>好きなもの：</a><br />
                                    <a>言語：</a><br />
                                    <a>ツール</a><br />
                                    <a>プラットフォーム：</a><br />
                                    <a>DTM: </a><br />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;                   //page2を出力する為に必要