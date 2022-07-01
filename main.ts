import { ProductMenu } from "./menu/productmenu";
import { ProductManagement } from "./management/management";
import { Product } from "./model/product";

let product = new Product("Bánh mì", " Đồ khô",  10000, 5, "Ngày nhập: 1 / 7 / 2022", "bánh");
let product1 = new Product("Kẹo", " Đồ khô",  15000, 10, "Ngày nhập: 1 / 7 / 2022", "kẹo");
let product2 = new Product("CoCa Cola", " Đồ giải khát", 10000, 15, "Ngày nhập: 1 / 7 / 2022", "nước");
let product3 = new Product("Hảo Hảo", " Đồ khô",  10000, 20, "Ngày nhập: 1 / 7 / 2022", "mì gói");
let product4 = new Product("Hải châu", " Đồ khô",  5000, 25, "Ngày nhập: 1 / 7 / 2022", "bột canh");

let productmanagement = new ProductManagement()
productmanagement.push(product)
productmanagement.push(product1)
productmanagement.push(product2)
productmanagement.push(product3)
productmanagement.push(product4)
let productMenu = new ProductMenu();
productMenu.run()