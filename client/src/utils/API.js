import axios from "axios";

export default {
  getProductCatalog: function () {
    return axios.get("/api/product-catalog");
  },
}

