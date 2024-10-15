import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../../../_metronic/helpers";
import { User, UsersQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const USER_URL = `${API_URL}/user`;
const GET_USERS_URL = `${API_URL}/users/query`;
const API_URL2 = "http://192.168.18.112:4000/api/v1/user/";
const API_URLQuery = "http://192.168.18.112:4000/api/v1/user/getAllUsers";
const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${API_URLQuery}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data);
};

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${API_URL2}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const updateUser = (formData: FormData, id: any): Promise<User | undefined> => {
  return axios
    .put(`${API_URL2}update/${id.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const createUser = (formData: FormData): Promise<User | undefined> => {
  return axios
    .post(API_URL2 + "register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data);
};

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${API_URL2}delete/${userId}`).then(() => {});
};

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${API_URL2}delete/${id}`));
  return axios.all(requests).then(() => {});
};

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
};
