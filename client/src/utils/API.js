import axios from "axios";

export default {
  // Gets all Example data
  getExamples: function () {
    return axios.get("/api/example");
  },
}

