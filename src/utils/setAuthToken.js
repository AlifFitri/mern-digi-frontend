import axios from 'axios';

// const baseURL = process.env.REACT_APP_BE_URL;
// let headers = {};

// if(localStorage.token){
//     headers.Authorization = `Bearer ${localStorage.token}`;
// }

// console.log("Base Url: " + baseURL);

// const setAuthToken = axios.create({
//     baseURL: baseURL,
//     headers,
// });

const setAuthToken = token => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
  }
  else{
    delete axios.defaults.headers.common['Authorization'];
  }
}


export default setAuthToken;