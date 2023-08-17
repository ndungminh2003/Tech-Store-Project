import axios from "axios";
import { get_config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

const getProductBySlug = async (slug) => {
  const response = await axios.get(`${base_url}product/${slug}`);

  return response.data;
};

const getLimitProducts = async (limit) => {
  let params = "?";
  if (limit) {
    for (let key in limit) {
      params += `${key}=${limit[key]}&`;
    }
  }
  const response = await axios.get(`${base_url}product/${params}`);

  return response.data;
};

const getProductByCatalog = async (params) => {
  // const response = await axios.get(`${base_url}product/`, { params });
  // console.log("service", params);
  const response = await axios.get(`${base_url}product/${params}`);

  return response.data;
};

const searchProducts = async (query) => {
  const response = await axios.get(`${base_url}product/search/${query}`);
  console.log(response.data);
  return response.data;
};

const createProduct = async (product) => {
  let config = get_config();
  const response = await axios.post(`${base_url}product/`, product, config);

  return response.data;
};

const updateProduct = async (product) => {
  let config = get_config();
  const response = await axios.put(
    `${base_url}product/${product.id}`,
    {
      title: product.productData.title,
      description: product.productData.description,
      price: product.productData.price,
      brand: product.productData.brand,
      category: product.productData.category,
      tags: product.productData.tags,
      color: product.productData.color,
      quantity: product.productData.quantity,
      images: product.productData.images,
    },
    config
  );
  // console.log(product.productData);
  return response.data;
};

const getProduct = async (id) => {
  let config = get_config();
  const response = await axios.get(`${base_url}product/by-id/${id}`, config);

  return response.data;
};

const deleteProduct = async (id) => {
  let config = get_config();
  const response = await axios.delete(`${base_url}product/${id}`, config);

  return response.data;
};

const productService = {
  getProducts,
  getProductBySlug,
  getLimitProducts,
  getProductByCatalog,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  searchProducts,
};

export default productService;
