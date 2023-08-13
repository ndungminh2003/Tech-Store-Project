import axios from "axios";
import { get_config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const createOrder = async (order) => {
  let config = get_config();
  const response = await axios.post(
    `${base_url}user/cart/cash-order`,
    order,
    config
  );

  return response.data;
};

const orderService = {
  createOrder,
};

export default orderService;
