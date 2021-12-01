import client from "./client";

const endpointList = "/search/users?q=";
const endpointUsers = "/users/";

const searchUsers = (userName, paginationCall, page) =>
  client.get(endpointList + userName + "&page=" + page);

const userDetail = (url) => client.get(endpointUsers + url.split("users/")[1]);

export default {
  searchUsers,
  userDetail,
};
