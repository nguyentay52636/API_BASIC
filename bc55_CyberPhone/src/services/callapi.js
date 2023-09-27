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
}
