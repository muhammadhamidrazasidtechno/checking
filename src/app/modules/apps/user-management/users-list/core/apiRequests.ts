const API_URL2 = "http://192.168.18.112:4000/api/v1/";
import axios, { AxiosResponse } from "axios";

const getUsers = (query: string) => {
  return axios.get(`${API_URL2}${query}`).then((d: AxiosResponse) => d.data);
};

const createUser = (data: { [key: string]: any }, url: string) => {
  // Prepare the data to be sent in the request
  return axios.post(
    API_URL2 + url,
    data, // Directly use the data object
    {
      headers: {
        "Content-Type": "application/json", // Assuming you're sending JSON
      },
    }
  );
};

export { createUser, getUsers };
