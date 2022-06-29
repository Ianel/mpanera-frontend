import { BASE_URL } from "../constants/urls";
import axios from "axios";

class AuthService {
  register = (data) => {
    return axios.post(`${BASE_URL}/auth/register`, data);
  };

  login = (data) => {
    return axios.post(`${BASE_URL}/auth/login`, data);
  };

  saveUser = (token, user_id) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("userId", user_id);
  };

  logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
  };

  getUserToken = () => localStorage.getItem("userToken");

  getUserId = () => localStorage.getItem("userId");
}

export default new AuthService();
