var api = new CallApi();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  //show loader => display: block
  //   getEle("loader").style.display = "block";

  var promise = api.fectchData();

  promise
    .then(function (result) {
      //hide loader => display: none
      //   getEle("loader").style.display = "none";

      //gọi hàm renderUI
      renderUI(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
//setInterval(getListProduct, 5000);
getListProduct();
function renderUI(data) {
  var table = document.getElementById("tblDanhSachSP");
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    content += `
    <tr>
     <th>${i + 1}</th>
    <th>${product.tenSP}</th>
    <th>${product.gia}</th>
    <th><img src="../../assets/img/${
      product.hinhAnh
    }" alt="" width="50px"></th>   
    <th>${product.moTa}</th>             
    <th>
    <button class="btn btn-success" onclick="deleteProduct(${
      product.id
    })">Xoá</button>
     <button class="btn btn-danger"  data-toggle="modal"
     data-target="#myModal" onclick="editProduct(${product.id})"> Sửa</button>
     
     </th>
    </tr>`;
  }
  table.innerHTML = content;
}
function deleteProduct(id) {
  var promise = api.deleteProductByID(id);
  promise
    .then(function (result) {
      getListProduct();
      NotiAlert("error", "Xoa Thanh Cong", 1000);
    })
    .catch(function (error) {
      console.log(error);
    });
}
document.getElementById("btnThemSP").onclick = function laythongtin() {
  var title = document.querySelector(".modal-title");
  title.innerHTML = " add san pham";

  var footer = document.querySelector(".modal-footer");
  footer.innerHTML = `<button class="btn btn-danger" onclick="addProduct()" >Add</button>`;
};
function info(product) {
  document.getElementById("TenSP").value = product.tenSP;
  document.getElementById("GiaSP").value = product.gia;
  document.getElementById("HinhSP").value = product.hinhAnh;
  document.getElementById("moTa").value = product.moTa;
  document.querySelector(".modal-title").innerHTML = "update sanpham";
  document.querySelector(
    ".modal-footer"
  ).innerHTML = `<button class="btn btn-danger" onclick="updateProduct(${product.id})" >UpdateEdit</button>`;
}
function addProduct() {
  info(ten, gia, hinh, mota);
  const product = new Product("", tenSP, giaSP, HinhSP, moTa);
  var promise = api.addProduct(product);
  promise
    .then(function () {
      getListProduct();
      document.querySelector(".close").click();
      NotiAlert("success", "Thanh Cong", 1000);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function NotiAlert(icon, title, timer) {
  Swal.fire({
    position: "center",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: timer,
  });
}
function editProduct(id) {
  var promise = api.getProductByID(id);
  promise
    .then(function (result) {
      console.log(result.data);

      info(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function updateProduct(id) {
  var tensp = document.getElementById("TenSP").value;
  var giasp = document.getElementById("GiaSP").value;
  var hinhsp = document.getElementById("HinhSP").value;
  var mota = document.getElementById("moTa").value;
  const product = new Product("", tensp, giasp, hinhsp, mota);
  var promise = api.editProductByID(id, product);
  promise
    .then(function () {
      getListProduct();
      NotiAlert("success", "ThanhCong", 1000);
      document.querySelector(".close").click();
    })

    .catch(function (error) {
      console.log(error);
    });
}
