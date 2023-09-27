var api = new CallApi();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  //show loader => display: block
  getEle("loader").style.display = "block";

  var promise = api.fectchData();

  promise
    .then(function (result) {
      //hide loader => display: none
      getEle("loader").style.display = "none";

      //gọi hàm renderUI
      renderUI(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProduct();

function renderUI(data) {
  //cần phải nhận được data từ server để render
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    content += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card cardPhone">
            <img src="./img/${product.hinhAnh}" class="card-img-top" alt="..." />
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <div>
                    <h3 class="cardPhone__title">${product.tenSP}</h3>
                    <p class="cardPhone__text">${product.moTa}</p>
                </div>
                <div>
                    <h3 class="cardPhone__title">$${product.gia}</h3>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                <div class="cardPhone__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div>
                    <button class="btnPhone-shadow">
                    <i class="fa fa-shopping-cart"></i> Buy Now
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
  }

  getEle("listProduct").innerHTML = content;
}
