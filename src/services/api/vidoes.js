import axios from 'axios'

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/search?"


let YouTubeApiKey = ''
let YouTubeChannelId = ''
let YouTubeOrder = 'date'
let YouTubePart = 'snippet'
let YouTubeType = 'video, id'
let YoutubeMaxResults = 50

export default {
  getVideoes() {
    return axios.get('/search?_embed',
   { params: {
    key: YouTubeApiKey,
    order: YouTubeOrder,
    part: YouTubePart,
    type: YouTubeType,
    maxResults: YoutubeMaxResults,
    channelId: YouTubeChannelId
  }}).then(response => {
    console.log(response)
    return response.data
  })
  }
}
