import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.github.com/search",
});

export default apiClient;
