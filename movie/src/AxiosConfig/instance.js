import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: "ac35580be554252f7d6877401caadb42",
  },
});


export default axiosInstance;