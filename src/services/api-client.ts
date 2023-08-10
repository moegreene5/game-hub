import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7fad09a8fc664322a5d2f474a5c2e722",
  },
});

export { CanceledError };
