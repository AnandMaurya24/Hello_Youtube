import React, { useEffect,useState } from 'react'
import { YOUTUBE_VIDEO_URL } from '../utils/constants';
import Videocard from './Videocard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);
  
  const getVideos = async () => {
    const data=await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }

  return (
    
      <div className='flex flex-wrap'> 
        {videos.map((video)=> ( <Videocard key={video.id} info={video} />
        ))}
        
      </div>
  )
}

export default VideoContainer