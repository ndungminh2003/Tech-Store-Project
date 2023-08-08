import axios from "axios";
import { get_config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiry/`);

  return response.data;
};
const deleteEnquiry = async (id) => {
  let config = get_config();
  const response = await axios.delete(`${base_url}enquiry/${id}`, config);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${base_url}enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  let config = get_config();
  const response = await axios.put(
    `${base_url}enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};
const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;
