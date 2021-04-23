import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = process.env.baseURL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const getResource = async (path, token="token") => {
  try {
    const response = await axios.get(path, {
      headers: {
        Authorization: token,
      },
    });
    // toast.success(response.data.message);
    return response.data.payload;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error.response.data;
  }
};

const postResource = async (path, body, token="token") => {
  try {
    const response = await axios.post(path, body, {
      headers: {
        Authorization: token,
      },
    });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error.response.data;
  }
};

const putResource = async (path, body, token="token") => {
  try {
    const response = await axios.put(path, body, {
      headers: {
        Authorization: token,
      },
    });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error.response.data;
  }
};

const deleteResource = async (path, token="token") => {
  try {
    const response = await axios.delete(path, {
      headers: {
        Authorization: token,
      },
    });
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw error.response.data;
  }
};

export { getResource, postResource, putResource, deleteResource };
