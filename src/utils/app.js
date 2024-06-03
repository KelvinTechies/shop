import axios from "axios";

export const fetchData = () => {
  return axios
    .get("https://dummyjson.com/products/?limit=18")
    .then((res) => res.data);
};

export const fetchAllProducts = () => {
  return axios
    .get("https://dummyjson.com/products/?limit=9")
    .then((res) => res.data);
};
