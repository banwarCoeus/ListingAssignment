import client from "./client";

const endpoint = "/users?q=";

const searchUsers = (userName, paginationCall, page) =>
  client.get(endpoint + userName + "&page=" + page);

export default {
  searchUsers,
};
