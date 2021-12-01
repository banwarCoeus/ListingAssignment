import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.github.com",
});

export default apiClient;
