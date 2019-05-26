import axios from 'axios'
const authToken = process.env.API_TOKEN
const authRoute = process.env.SPOTIFY_API_END_POINT
export const getAuth = async () => {
    const url = 'https://accounts.spotify.com/api/token'
    const timeout = 1000
    const headers = {
        'Authorization': authToken,//'Basic YzI1ZTEzMzAyMjkxNDc0Y2I3MWRhMmE5YzhmMjQyODE6NTRkZTI3YzM5Nzg1NDM3YjlhNjQ4MjRiMjViOWY1ZDY=', 
        'Content-Type': authRoute//'application/x-www-form-urlencoded' 
    }
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    await axios.post(url, params, timeout, headers)
    .then((response)=>{
        console.log('response', response.data)
    })
};