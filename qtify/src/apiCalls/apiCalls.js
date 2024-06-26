import axios from "axios";

const backendEndpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async() => {
    try{
        const response = await axios.get(`${backendEndpoint}/albums/top`);
        return response.data;
    }catch(err){
        console.log(err.response);
    }
}

export const fetchNewAlbums = async() => {
    try{
        const response = await axios.get(`${backendEndpoint}/albums/new`);
        return response.data;
    }catch(err){
        console.log(err.response);
    }
}

export const fetchSongs = async() => {
    try{
        const response = await axios.get(`${backendEndpoint}/songs`);
        return response.data;
    }catch(err){
        console.log(err.response);
    }
}

export const fetchFilters = async() => {
    try{
        const response = await axios.get(`${backendEndpoint}/genres`);
        return response.data;
    }catch(err){
        console.log(err.response);
    }
}

export const fetchFAQs = async() => {
    try{
        const response = await axios.get(`${backendEndpoint}/faq`);
        return response.data;
    }catch(err){
        console.log(err.response);
    }
}