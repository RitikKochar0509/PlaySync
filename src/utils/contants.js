export const API_KEY  = "AIzaSyAFeGcEQukax7jcdiuyzNDMNRyEDgtlgj0";

export const YOUTUBE_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
API_KEY;

export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export function searchYouTubeVideos(query) {
    const regionCode = 'IN';
    const maxResults = 50;
    // URL for the YouTube API request
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&regionCode=${regionCode}&type=video&maxResults=${maxResults}`;
  
    // Make the API request
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  }
  