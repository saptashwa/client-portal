import axios from 'axios';
import { BASE_URL, PAGE_URL} from "../util/constant";
const params = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
};
export async function loginUser(email, password) {
  const data = {
    email: email,
    password: password,
  };
  const url = BASE_URL + PAGE_URL.LOGIN_URL;
  const response = await axios.post(url, data, params);
  return response;
}

export async function registerUser(firstname, lastName, email, password, contactNo) {
  const data = {
    firstName:firstname,
    lastName:lastName,
    email:email,
    password:password,
    username:email,
    contactNumber:contactNo
  };
  const url = BASE_URL + PAGE_URL.REGISTER_URL;
  const response = await axios.post(url, data, params);
  return response;
}

export async function getAllUsers() {
  params.headers['Authorization'] = localStorage.getItem('token');
  const url = BASE_URL + PAGE_URL.GET_ALL_USERS_URL;
  const response = await axios.get(url, params);
  return response;
}

export async function modifyUser(userId, propertyToModify) {
  params.headers['Authorization'] = localStorage.getItem('token');
  const url = BASE_URL + PAGE_URL.MODIFY_USER + userId;
  const response = await axios.put(url, propertyToModify, params);
  return response;
}
