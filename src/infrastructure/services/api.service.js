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
    // toast.success(JSON.stringify(response.data.message).replace(/["'{}]+/g, " "));
    return response.data.payload;
  } catch (error) {
    toast.error(JSON.stringify(error.response.data.message).replace(/["'{}]+/g, " "));
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
    toast.success(JSON.stringify(response.data.message).replace(/["'{}]+/g, " "));
    return response.data;
  } catch (error) {
    toast.error(JSON.stringify(error.response.data.message).replace(/["'{}]+/g, " "));
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
    toast.success(JSON.stringify(response.data.message).replace(/["'{}]+/g, " "));
    return response.data;
  } catch (error) {
    toast.error(JSON.stringify(error.response.data.message).replace(/["'{}]+/g, " "));
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
    toast.success(JSON.stringify(response.data.message).replace(/["'{}]+/g, " "));
    return response.data;
  } catch (error) {
    toast.error(JSON.stringify(error.response.data.message).replace(/["'{}]+/g, " "));
    throw error.response.data;
  }
};

export { getResource, postResource, putResource, deleteResource };
