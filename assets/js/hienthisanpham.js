// hienthisanpham.js sửa để lấy trực tiếp từ product.js và product2.js

// flash sale
const container = document.getElementById("product-listindex");
// sử dụng product từ product.js
product.forEach(p => {
  const div = document.createElement("div");
  div.className = "card m-2 shadow-sm";
  div.style.width = "18rem";

  div.innerHTML = `
    <img src="${p.img || '/assets/img/default.png'}" 
         class="card-img-top" 
         alt="${p.title}" 
         onerror="this.src='/assets/img/default.png'">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${p.title}</h5>
      <div class="d-flex justify-content-between mb-2">
        <span class="old-price">${p.oldprice}</span>
        <span class="discount">${p.giamgia}</span>
      </div>
      <div class="new-price mb-2">${p.newprice}</div>
      <div class="progress-wrapper mb-3">
        <div class="progress-fill">🔥 Còn ${p.sanphamcon} / ${p.soluong} sản phẩm</div>
      </div>
      <a href="/chitiet.html?id=${p.id}" 
         class="btn btn-primary mt-auto">Mua ngay</a>
    </div>
  `;

  container.appendChild(div);
});

// sản phẩm bán chạy
const container2 = document.getElementById("product-listindex2");
// sử dụng product2 từ product2.js
product2.forEach(p => {
  const div = document.createElement("div");
  div.className = "card m-2 shadow-sm";
  div.style.width = "18rem";

  div.innerHTML = `
    <img src="${p.img || '/assets/img/default.png'}" 
         class="card-img-top" 
         alt="${p.title}" 
         onerror="this.src='/assets/img/default.png'">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${p.title}</h5>
      <div class="d-flex justify-content-between mb-2">
        <span class="old-price">${p.oldprice}</span>
        <span class="discount">${p.giamgia}</span>
      </div>
      <div class="new-price mb-2">${p.newprice}</div>
      <div class="progress-wrapper mb-3">
        <div class="progress-fill">🔥 Còn ${p.sanphamcon} / ${p.soluong} sản phẩm</div>
      </div>
      <a href="/chitiet.html?id=${p.id}" 
         class="btn btn-primary mt-auto">Mua ngay</a>
    </div>
  `;

  container2.appendChild(div);
});