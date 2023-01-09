import { default as axios } from "axios";

export const useAxios = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;

  const get = (path: string, token: string): any => {
    return axios.get(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  function post<T>(path: string, data: T, token?: string): any {
    return axios.post(
      `${BASE_URL}${path}`,
      data,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  }

  const put = (path: string, data: string, token: string): any => {
    return axios.put(
      `${BASE_URL}${path}`,
      data,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  const remove = (path: string, token: string): any => {
    return axios.delete(
      `${BASE_URL}${path}`,
      token
        ? {
            headers: { Authorization: `Bearer ${token}` },
          }
        : undefined
    );
  };

  return {
    get,
    post,
    put,
    remove,
  };
};
