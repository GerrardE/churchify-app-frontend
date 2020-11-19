import axios from "axios";

axios.defaults.baseURL = process.env.baseURL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const AUTH_TOKEN = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

const getResource = async (path) => {
  try {
    const response = await axios.get(path);
    return response.data.payload;
  } catch (error) {
    throw error.response.data;
  }
};

const postResource = async (path, body) => {
  try {
    const response = await axios.post(path, body);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const putResource = async (path, body) => {
  try {
    const response = await axios.put(path, body);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const deleteResource = async (path) => {
  try {
    const response = await axios.delete(path);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export {
  getResource,
  postResource,
  putResource,
  deleteResource,
};
