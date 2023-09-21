import React, { useEffect, useState } from 'react'
import {YOUTUBE_API, searchResultArray,API_KEY} from  '../utils/contants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const _searchQuery = useSelector((state) => state.search.query);
  
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    if(_searchQuery){
      searchYouTubeVideos(_searchQuery);
    }
    else{
    getVideos();
    }
  },[_searchQuery])

  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);    
  }

  function searchYouTubeVideos(query) {
    const regionCode = 'IN';
    const maxResults = 50;
    // URL for the YouTube API request
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&regionCode=${regionCode}&type=video&part=snippet&maxResults=${maxResults}`;
  
    // Make the API request
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setVideos(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  }
  

  
  
  return (
    <div className='flex flex-wrap'>
      {videos.map((video,index)=> <Link key = {index} to ={`/watch?v=${_searchQuery ? video.id.videoId : video.id}`}> <VideoCard key = {video.id} info = {video} /> </Link>)}
      </div>
  )
}

export default VideoContainer