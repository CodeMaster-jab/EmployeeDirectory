import axios from "axios";

const BASEURL = "https://randomuser.me/api?nat=us&results=20";

// Export an object with a "search" method that searches the Random User API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
