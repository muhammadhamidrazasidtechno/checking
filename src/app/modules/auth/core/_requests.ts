import axios from "axios";
import { AuthModel, UserModel } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;
const API_URL2 = "http://192.168.18.112:4000/api/v1/user";

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL2}/verify_token`;
export const LOGIN_URL = `${API_URL2}/login`;
export const REGISTER_URL = `${API_URL2}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login(role: any, email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    role,
    email,
    password,
  });
}

// Server should return AuthModel
export function register(
  role: string,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    role,
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  console.log(token);

  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  });
}
