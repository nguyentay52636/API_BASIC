function getEle(id) {
  return document.getElementById(id);
}
function getListProduct() {
  var promise = api.fectchData();
  promise
    .then(function (result) {
      renderUI(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
var api = new CallApi();
function DeleteProduct(id) {
  var promise = api.deleteProductByID(id);
  promise
    .then(function (result) {
      getListProduct();
    })
    .catch(function (error) {
      alert("error");
    });
}
