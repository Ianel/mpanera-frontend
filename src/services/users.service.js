import { BASE_URL } from "@/constants/urls";
import axios from "axios";

class UserService {
  getAllUsers = () => {
    return axios.get(`${BASE_URL}/users`);
  };

  getUser = (id) => {
    return axios.get(`${BASE_URL}/users/${id}`);
  };
}

export default new UserService();
