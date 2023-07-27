import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const register = async (user) => {
  const response = await axios.post(`${base_url}user/register`, user);
  if (response.data) {
    return response.data;
  }
};

const login = async (user) => {
  const response = await axios.post(`${base_url}user/login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config);
  console.log(response.data);
  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.get(`${base_url}user/getorder/${id}`, config);

  return response.data;
};

const userService = {
  login,
  getOrders,
  getOrder,
  register,
};

export default userService;
