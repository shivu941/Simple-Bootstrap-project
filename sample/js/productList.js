
let productsListUrl =
"https://my-json-server.typicode.com/adithkrishnan98/swagofindia/db";
let productsList;
let htmlToReturn = "";
$(document).ready(function () {
$.ajax({
  type: "GET",
  url: productsListUrl,
  data: { get_param: "value" },
  dataType: "json",
  success: function (data) {
    data.products.forEach((product) => {
      htmlToReturn = `<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-0 my-2">
      <a href="../sample/product-detail.html">
          <div class="card"> <img class="card-img-top" src="img/${product.imageName}.png">
              <div class="card-body">
                  <div class="d-flex align-items-start justify-content-between">
                      <div class="d-flex flex-column">
                          <div class="h6 font-weight-bold">${product.name}</div>
                          <div class="d-flex">
                          <div class="text-muted" style="padding-right: 15px">Rs.${product.priceAfterDiscount}</div>
                          <del>Rs.${product.price}</del><span class="offer">(60%Off)</span></p>
                          </div>
                      </div>
                      <div class="btn"><span class="far fa-heart"></span></div>
                  </div>
              </div>
          </div>
      </a>
  </div>`;
      document.getElementById("productListArea").innerHTML += htmlToReturn;
    });
  },
});
});