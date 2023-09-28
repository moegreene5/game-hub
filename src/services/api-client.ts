import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  results: T[];
  next: string | null;
  count: number;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f65ec7245cc47778f89f686c47a38b6",
  },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;

export { CanceledError };
