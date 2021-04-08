import axios from "axios";

const instance = axios.create({
  baseURL: "https://katkolomycew.github.io/spacex-launches/",
});

export default instance;
