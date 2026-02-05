import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './youtube.css';
import './box_container.css';

function youtube(){
    const [latestVideoId, setLatestVideoId] = useState('JUObY4-rpGs');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestVideo = async () => {
            try {
                const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
                console.log('API Key loaded:', !!apiKey);
                
                if (!apiKey) {
                    throw new Error('YouTube API key not found in .env');
                }

                // Direct channel ID for AKADRA
                const channelId = 'UCZs0p_9xe5eaOnZGD9HRmCg';
                console.log('Fetching channel:', channelId);

                // Get channel uploads playlist
                const channelResponse = await axios.get(
                    'https://www.googleapis.com/youtube/v3/channels',
                    {
                        params: {
                            part: 'contentDetails',
                            id: channelId,
                            key: apiKey
                        }
                    }
                );

                console.log('Channel response:', channelResponse.data);

                if (!channelResponse.data.items || channelResponse.data.items.length === 0) {
                    throw new Error('Channel not found. Response: ' + JSON.stringify(channelResponse.data));
                }

                const uploadPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;
                console.log('Upload playlist ID:', uploadPlaylistId);

                // Get latest video from uploads playlist
                const videosResponse = await axios.get(
                    'https://www.googleapis.com/youtube/v3/playlistItems',
                    {
                        params: {
                            part: 'snippet',
                            playlistId: uploadPlaylistId,
                            maxResults: 1,
                            key: apiKey
                        }
                    }
                );

                console.log('Videos response:', videosResponse.data);

                if (videosResponse.data.items && videosResponse.data.items.length > 0) {
                    const videoId = videosResponse.data.items[0].snippet.resourceId.videoId;
                    console.log('Latest video ID:', videoId);
                    setLatestVideoId(videoId);
                } else {
                    console.warn('No videos found in response');
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching YouTube video:', err);
                console.error('Error details:', err.response?.data || err.message);
                setError(err.response?.data?.error?.message || err.message || 'Unknown error');
                setLoading(false);
            }
        };

        fetchLatestVideo();
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
          <div className="hello">
            <div className="hitokoto">
              <h1>AKADRAのYoutubeチャンネル<br/>
              有名所からコアなものまで気ままに実況してみたり<br/>
              不定期更新</h1>
            </div>
            <hr></hr>
            <div className="hitokoto">
              <h1>おすすめ動画</h1>
            </div>
            {error && <div className="hitokoto" style={{color: '#ff89c6'}}>※ 最新動画の取得に失敗しました</div>}
            {loading && <div className="hitokoto">※ 読み込み中...</div>}
            <div className='y_box_main'>
              <iframe width='100%' height='auto' src={`https://www.youtube.com/embed/${latestVideoId}?si=lXEvdwpsgAouIXMp`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="hitokoto">
              <h1>再生リスト（抜粋）</h1>
            </div>
            <div className='y_box'>
              <div className='y_hidari'>
                <h2>100均ゲームシリーズ</h2>
                <hr></hr>
                <h4>かつて20年近く前に100均で売られていたPCゲームを掘り起こして遊ぶシリーズ</h4>
              </div>
              <div className='y_migi'>         
                <iframe width='100%' height='auto' src="https://www.youtube.com/embed/videoseries?si=YYgIhHb76hhJc5Dn&amp;list=PLfA6ME9FVmQKDoyI3mnw67-D4dCpjsyG7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div className='y_box'>
              <div className='y_migi'>
                <iframe width='100%' height='auto' src="https://www.youtube.com/embed/videoseries?si=64tyUAqUIW6TUiJl&amp;list=PLfA6ME9FVmQLAp2qcgUvuRPJStLx-hQnR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className='y_hidari'>         
                <h2>ポケットモンスターバイオレット</h2>
                <hr></hr>
                <h4>皆さんご存知ポケットモンスターシリーズの2022年発売作品「ポケットモンスタースカーレット・バイオレット」をプレイ</h4>
              </div>
            </div>
            <div className='y_box'>
              <div className='y_hidari'>
                <h2>ドキドキ文芸部</h2>
                <hr></hr>
                <h4>言わずとしれたドキドキしちゃうアレ</h4>
              </div>
              <div className='y_migi'>         
              <iframe width='100%' height='auto' src="https://www.youtube.com/embed/iqZXvBUZ3vc?si=tNI5dkwbClmdh39p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div className='y_box'>
              <div className='y_migi'>
                <iframe width='100%' height='auto' src="https://www.youtube.com/embed/zt1sGKLJTPM?si=gA1nRtpp7pg-SBHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className='y_hidari'>         
                <h2>幻日のヨハネ – NUMAZU in the MIRAGE –</h2>
                <hr></hr>
                <h4>ラブライブ!サンシャインのスピンオフ作品「幻日のヨハネ」をゲーム化したもの。不慣れなカードバトルにチャレンジ</h4>
              </div>
            </div>
            <div className='y_box'>
              <div className='y_hidari'>
                <h2>ポケパークWii ピカチュウの大冒険</h2>
                <hr></hr>
                <h4>子供の頃からずっとやりたかったポケパークをプレイ</h4>
              </div>
              <div className='y_migi'>         
              <iframe width='100%' height='auto' src="https://www.youtube.com/embed/qVvVHlWYKqA?si=1UC0wmZY2w6LZxqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>                        
          </div>
        </div>
      </motion.div>
    );
}

export default youtube;