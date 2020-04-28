import axios from 'axios'

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/search?"


let YouTubeApiKey = 'AIzaSyCLWSUfqfDidWf_VDpy6O5cGLj93L35paU'
let YouTubeChannelId = 'UCRb-5dUzYOio_BE_zQ9Z0xw'
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
