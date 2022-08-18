import { BASE_URL } from "../constants/urls";
import axios from "axios";

class UserService {
  getAllUsers = () => {
    return axios.get(`${BASE_URL}/users`);
  };

  getUser = (id) => {
    return axios.get(`${BASE_URL}/users/${id}`);
  };

  updateUser = (id, data) => {
    return axios.patch(`${BASE_URL}/users/${id}`, data);
  };

  uploadUserImage = (data) => {
    return axios.post(`${BASE_URL}/userImage`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
}

export default new UserService();
