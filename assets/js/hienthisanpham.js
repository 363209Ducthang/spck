        const container = document.getElementById("product-list");

        product.forEach(product => {

            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
            <img src="${product.img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <div class="price-row">
                    <div class="old-price">${product.oldprice}</div>
                    <div class="discount">${product.giamgia}</div>
                </div>

                <div class="new-price">$${product.newprice}</div>

                <div class="progress-wrapper">
                    <div class="progress-fill">
                        🔥 Còn ${product.sanphamcon} / ${product.soluong} sản phẩm
                    </div>
                </div>
                <a href="#" class="btn btn-primary">Mua ngay</a>
            </div>
            `;

            container.appendChild(div);

        });

        const container2 = document.getElementById("product-list2");

        product2.forEach(product => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
            <img src="${product.img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <div class="price-row">
                    <div class="old-price">${product.oldprice}</div>
                    <div class="discount">${product.giamgia}</div>
                </div>

                <div class="new-price">$${product.newprice}</div>

                <div class="progress-wrapper">
                    <div class="progress-fill">
                        🔥 Còn ${product.sanphamcon} / ${product.soluong} sản phẩm
                    </div>
                </div>
                <a href="#" class="btn btn-primary">Mua ngay</a>
            </div>
            `;

            container2.appendChild(div);
        });