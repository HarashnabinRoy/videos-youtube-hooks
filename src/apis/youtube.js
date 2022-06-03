import axios from 'axios';

const KEY = 'AIzaSyCkhHRtFgEoh41yIhKFlKimP2b6Qx8qI68';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});