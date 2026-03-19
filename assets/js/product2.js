const product2 = [
    {
        id: 1,
        title: "Bộ PC Gaming Intel Core i5-14600KF, Ram 16GB, VGA RTX 5060 [TẶNG MÀN HÌNH]",
        img: "https://nguyencongpc.vn/media/product/250-27600-pc-gaming-intel-core-i5-14600kf-ram-16gb-vga-rtx-5060-01.jpg",
        oldprice: "29.990.000đ",
        newprice: "27.800.000đ",
        giamgia: "7%",
        soluong: 5,
        sanphamcon: 4
    },
    {
        id: 2,
        title: "Bộ PC Gaming i5-12400F, RAM 16GB, RTX 3060 12GB [TẶNG MÀN HÌNH]",
        img: "https://nguyencongpc.vn/media/product/27016-pc-gaming-25251328.jpg",
        oldprice: "21.090.000₫",
        newprice: "21.090.000đ",
        giamgia: "0%",
        soluong: 5,
        sanphamcon: 2
    },
    {
        id: 3,
        title: "Bộ PC Gaming AMD Ryzen 5 5500, RAM 16GB, RTX 3050 6GB [TẶNG MÀN HÌNH]",
        img: "https://nguyencongpc.vn/media/product/250-27719-pc-gaming-amd-ryzen-5-5500-ram-16gb-rtx-3050-6gb-17.jpg",
        oldprice: "19.090.000₫",
        newprice: "17.090.000đ",
        giamgia: "Tiết kiệm 2.000.000đ",
        soluong: 5,
        sanphamcon: 1
    },
    {
        id: 4,
        title: "Bộ PC Đồ Hoạ Core i7-14700F, RAM 32GB DDR5, RTX 5070 Ultra White",
        img: "https://nguyencongpc.vn/media/product/250-26979-pc-dohoa-core-i7-14700k-ram-32g-ddr5-rtx-5070-ultra-white.jpg",
        oldprice: "56.990.000₫",
        newprice: "50.370.000đ",
        giamgia: "12%",
        soluong: 5,
        sanphamcon: 4
    },
    {
        id: 5,
        title: "Laptop Dell PV 15250 Essential (Core 3-100U, 8GB RAM, 512GB SSD, 15.6 inch FHD 120Hz, Intel Graphics, Black, NK Full VAT)",
        img: "https://nguyencongpc.vn/media/product/250-28648-laptop-dell-pv-15250-essential.jpg",
        oldprice: "15.690.000₫",
        newprice: "11.990.000đ",
        giamgia: "24%",
        soluong: 5,
        sanphamcon: 2
    },
    {
        id: 6,
        title: "Bộ PC Đồ Hoạ Intel Core i5-14600KF, RAM 32GB DDR5, VGA RTX 5060 TI 16GB",
        img: "https://nguyencongpc.vn/media/product/250-28100-pc---o-hoa-intel-core-i5-14600kf-ram-32gb-vga-rtx-5060-ti-16gb.jpg",
        oldprice: "49.990.000₫",
        newprice: "43.990.000đ",
        giamgia: "12%",
        soluong: 5,
        sanphamcon: 2
    },
    {
        id: 7,
        title: "Laptop Lenovo LOQ Gaming 15ARP9 (Core i5-12500H, 8GB RAM, 512GB SSD, 15.6 inch FHD 144Hz, RTX 4050, Black)",
        img: "https://nguyencongpc.vn/media/product/250-28304-laptop-lenovo-loq-gaming-15arp9-10101.jpg",
        oldprice: "20.990.000đ",
        newprice: "18.690.000đ",
        giamgia: "11%",
        soluong: 5,
        sanphamcon: 3
    },
    {
        id: 8,
        title: "Laptop Gaming Gigabyte A16 CVHI3VN893SH (Core i7-13620H, RTX 5060 8GB, 16GB RAM (1x16GB), 512GB SSD, 16 inch FHD+ 165Hz, Windows 11, Black)",
        img: "https://nguyencongpc.vn/media/product/250-28696-laptop-gigabyte-gaming-a16-cthi3vn893sh-01.jpg",
        oldprice: "38.990.000₫",
        newprice: "33.290.000đ",
        giamgia: "15%",
        soluong: 5,
        sanphamcon: 1
    },
    {
        id: 9,
        title: "RAM Adata XPG D35G DDR4 16GB 3200MHz (Black RGB)",
        img: "https://nguyencongpc.vn/media/product/250-25217-ram-adata-xpg-d35g-ddr4-16gb-3200-black-rgb.jpg",
        oldprice: "3.390.000đ",
        newprice: "3.220.000đ",
        giamgia: "5%",
        soluong: 5,
        sanphamcon: 2
    },
    {
        id: 10,
        title: "Bộ PC Đồ Họa Ryzen 9 9950X, RAM 32GB, RTX 5070 Ti 16GB",
        img: "https://nguyencongpc.vn/media/product/250-28408-bo-pc-do-hoa-ryzen-9-9950x-ram-32gb-rtx-5070-ti-16gb.jpg",
        oldprice: "72.990.000đ",
        newprice: "65.690.000đ",
        giamgia: "10%",
        soluong: 5,
        sanphamcon: 1
    },
    {
        id: 11,
        title: "Bộ PC Đồ họa AMD Ryzen 9 9950X, Ram 32GB, VGA RTX 3060 12G [TẶNG MÀN HÌNH]",
        img: "https://nguyencongpc.vn/media/product/250-27751-pc-do-hoa-amd-ryzen-9-9950x-ram-32gb-vga-rtx-3060-12g-01.jpg",
        oldprice: "54.990.000₫",
        newprice: "50.690.000đ",
        giamgia: "Tiết kiệm 4.300.000đ",
        soluong: 5,
        sanphamcon: 2
    },
    {
        id: 12,
        title: "Màn Hình MSI MAG 276CF E20 27 inch Full HD IPS",
        img: "https://nguyencongpc.vn/media/product/250-28454-msi-mag-276cf-e20-112.jpg",
        oldprice: "3.690.000₫",
        newprice: "2.990.000đ",
        giamgia: "19%",
        soluong: 30,
        sanphamcon: 9
    },
    {
        id: 13,
        title: "Card màn hình PNY GeForce RTX 5060 8GB ARGB EPIC-X RGB OC Triple Fan (VCG50608TFXXPB1-O)",
        img: "https://nguyencongpc.vn/media/product/250-28085-pny-rtx-5060-argb-oc-epic-x-triple-fan-01.jpg",
        oldprice: "10.990.000₫",
        newprice: "9.590.000đ",
        giamgia: "13%",
        soluong: 3,
        sanphamcon: 1
    },
    {
        id: 14,
        title: "Laptop GIGABYTE AORUS MASTER 16 BYH-C5VNE64SH (Intel Core Ultra 9 Processor 275HX | RTX 5080 16GB | RAM 32GB | SSD 1TB | 16 inch WQXGA 240Hz | Win 11)",
        img: "https://nguyencongpc.vn/media/product/250-27604-aorus-master-16-byh-c5vne64sh.jpg",
        oldprice: "110.000.000₫",
        newprice: "88.000.000đ",
        giamgia: "20%",
        soluong: 3,
        sanphamcon: 1
    },
    {
        id: 15,
        title: "Laptop Dell Vostro 3530 (Intel Core i7-1255U | RTX 4050 8GB | RAM 16GB | SSD 512GB | 15.6 inch FHD | Win 11)",
        img: "https://nguyencongpc.vn/media/product/250-27851-laptop_dell_vostro_3530__0002.jpg",
        oldprice: "15.990.000₫",
        newprice: "13.591.500đ",
        giamgia: "15%",
        soluong: 8,
        sanphamcon: 1
    },
    {
        id: 16,
        title: "Màn Hình ASUS ProArt PA278CV 27 inch 4K IPS",
        img: "https://nguyencongpc.vn/media/product/250-18771-asus-proart-pa278cv-1010101.jpg",
        oldprice: "10.080.000₫",
        newprice: "8.568.000đ",
        giamgia: "15%",
        soluong: 30,
        sanphamcon: 3
    }
]