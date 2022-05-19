import { BASE_URL } from '@/constants/urls';
import axios from 'axios';

class UserService {
    getAllUsers = () => {
        axios.get(`${BASE_URL}/users`);
    };
}

module.exports = UserService;