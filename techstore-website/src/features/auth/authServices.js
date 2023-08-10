import axios from "axios";
import { get_config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const login = async (user) => {
  const response = await axios.post(`${base_url}user/login`, user, {
    withCredentials: true,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (user) => {
  const response = await axios.post(`${base_url}user/register`, user);

  return response.data;
};

const logout = async (email) => {
  const response = await axios.post(
    `${base_url}user/logout`,
    { email },
    { withCredentials: true }
  );
  localStorage.removeItem("user");
  return response.data;
};

const refreshToken = async () => {
  const response = await axios.post(`${base_url}user/refresh`, {
    withCredentials: true,
  });
  return response.data;
};

const getOrders = async () => {
  let config = get_config();

  const response = await axios.get(`${base_url}user/getallorders`, config);
  return response.data;
};

const getOrder = async (id) => {
  let config = get_config();

  const response = await axios.get(`${base_url}user/getorder/${id}`, config);
  return response.data;
};

const authService = {
  login,
  logout,
  register,
  refreshToken,
  getOrders,
  getOrder,
};

export default authService;
