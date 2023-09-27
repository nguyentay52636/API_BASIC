//const { default: axios } = require("axios");

// const { default: axios } = require("axios");

//const { default: axios } = require("axios");

function CallApi() {
  this.fectchData = function () {
    /**
     * axios trả về đối tượng gọi là Promise
     * Promise (lời hứa)
     *    - Pending: chờ
     *    - Resolve: thành công
     *    - Reject: thất bại
     */
    var promise = axios({
      // url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/Products",
      url: "https://650f9b1c54d18aabfe9a2094.mockapi.io/api/Produts",

      method: "GET",
    });

    return promise;
  };
  this.deleteProductByID = function (id) {
    return axios({
      url: "https://650f9b1c54d18aabfe9a2094.mockapi.io/api/Produts/" + id,
      method: "DELETE",
    });
  };
  this.addProduct = function (product) {
    return axios({
      url: "https://650f9b1c54d18aabfe9a2094.mockapi.io/api/Produts/",
      method: "POST",
      data: product,
    });
  };
  this.getProductByID = function (id) {
    return axios({
      url: "https://650f9b1c54d18aabfe9a2094.mockapi.io/api/Produts/" + id,
      method: "GET",
    });
  };
  this.editProductByID = function (id, product) {
    return axios({
      url: "https://650f9b1c54d18aabfe9a2094.mockapi.io/api/Produts/" + id,
      method: "PUT",
      data: product,
    });
  };
}
