import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f65ec7245cc47778f89f686c47a38b6",
  },
});

export { CanceledError };
