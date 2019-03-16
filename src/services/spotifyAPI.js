import axios from 'axios'
import React from 'react';

const SPOTIFY_API_END_POINT = process.env.SPOTIFY_API_END_POINT

export const getAuth = async () => {
    await axios.post({url:`${SPOTIFY_API_END_POINT}/token`, timeout: 1000, headers: {'X-Custom-Header': 'foobar'}})
    .then(()=>{
        
    })
};