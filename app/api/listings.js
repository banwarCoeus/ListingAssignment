import client from "./client";

const endpointList = "/search/users?q=";
const endpointUsers = "/users/";

const searchUsers = (userName, paginationCall, page) =>
  client.get(endpointList + userName + "&page=" + page);

const userDetail = (url) => client.get(endpointUsers + url.split("users/")[1]);

const organizationsListing = () => client.get("/organizations");

const reposListing = () => client.get("/orgs/engineyard/repos");

const gistsListing = () => client.get("/gists");

export default {
  searchUsers,
  userDetail,
  organizationsListing,
  gistsListing,
  reposListing,
};
