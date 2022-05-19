import { BASE_URL } from "@/constants/urls";
import axios from "axios";

class UserService {
  getAllUsers = async () => {
    await axios.get(`${BASE_URL}/users`);
  };
}

export default UserService;
