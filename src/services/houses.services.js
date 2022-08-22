import { BASE_URL } from "../constants/urls";
import axios from "axios";

class HouseService {
  createHouse = (data) => {
    return axios.post(`${BASE_URL}/houses`, data);
  };

  getAllHouses = () => {
    return axios.get(`${BASE_URL}/houses`);
  };

  getHouse = (id) => {
    return axios.get(`${BASE_URL}/houses/${id}`);
  };

  getHousesByCityName = (city) => {
    return axios.get(`${BASE_URL}/houses?city=${city}`);
  };

  deleteHousebyId = (id) => {
    return axios.delete(`${BASE_URL}/houses/${id}`);
  };

  uploadImages = (data) => {
    return axios.post(`${BASE_URL}/images`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  getHouseImagesById = (id) => {
    return axios.get(`${BASE_URL}/images/${id}`);
  };
}

export default new HouseService();
