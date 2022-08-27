import axios from "axios";
import { BASE_URL } from "../constants/urls";

class ServicesService {
  addServices = (data) => {
    return axios.post(`${BASE_URL}/services`, data);
  };

  getServicesById = (id) => {
    return axios.get(`${BASE_URL}/services/${id}`);
  };

  updateServices = (services) => {
    return axios.patch(
      `${BASE_URL}/services/${services["services_id"]}`,
      services
    );
  };
}

export default new ServicesService();
