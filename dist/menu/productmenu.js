"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMenu = void 0;
const rl = __importStar(require("readline-sync"));
const management_1 = require("../management/management");
const product_1 = require("../model/product");
var ProductChoice;
(function (ProductChoice) {
    ProductChoice[ProductChoice["SHOW_ALL_PRODUCT"] = 1] = "SHOW_ALL_PRODUCT";
    ProductChoice[ProductChoice["SEARCH_PRODUCT_BY_NAME"] = 2] = "SEARCH_PRODUCT_BY_NAME";
    ProductChoice[ProductChoice["ADD_NEW_PRODUCT"] = 3] = "ADD_NEW_PRODUCT";
    ProductChoice[ProductChoice["UPDATE_PRODUCTS"] = 4] = "UPDATE_PRODUCTS";
    ProductChoice[ProductChoice["REMOVE_PRODUCTS"] = 5] = "REMOVE_PRODUCTS";
})(ProductChoice || (ProductChoice = {}));
class ProductMenu {
    constructor() {
        this.ProductManagement = new management_1.ProductManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('---Quản Lý Sản Phẩm---');
            console.log('1, Hiển thị tất cả sản phẩm');
            console.log('2, Tìm kiếm sản phẩm theo tên');
            console.log('3, Thêm sản phẩm');
            console.log('4, Cập nhật sản phẩm');
            console.log('5, Xóa sản phẩm');
            console.log('6, Quay lại');
            choice = +rl.question("nhập lựa chọn ");
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT: {
                    this.ShowAllProducts();
                    break;
                }
                case ProductChoice.SEARCH_PRODUCT_BY_NAME: {
                    this.SearchProductBYName();
                    break;
                }
                case ProductChoice.ADD_NEW_PRODUCT: {
                    this.CreateProduct();
                    break;
                }
                case ProductChoice.UPDATE_PRODUCTS: {
                    this.UpdateProduct();
                    break;
                }
                case ProductChoice.REMOVE_PRODUCTS: {
                    this.RemoveProduct();
                    break;
                }
            }
        } while (choice != 0);
    }
    CreateProduct() {
        console.log("**Tạo Sản phẩm mới**");
        let product = this.inputProduct();
        this.ProductManagement.CreateNew(product);
        console.log("thêm sản phẩm thành công");
    }
    ShowAllProducts() {
        console.log("**Danh sách sản phẩm**");
        let products = this.ProductManagement.getAll();
        for (let i = 0; i < products.length; i++) {
            console.log(`${i + 1},${products[i].name},${products[i].type},${products[i].price},${products[i].amount},${products[i].createDay},${products[i].description}`);
        }
    }
    SearchProductBYName() {
        let search = rl.question('Nhập tên sản phẩm muốn tìm: ');
        let searchProduct = this.ProductManagement.findByProductName(search);
        if (searchProduct) {
            console.log("kết quả");
            console.table(searchProduct);
        }
        else {
            console.log("Không có dữ liệu phù hợp");
        }
    }
    RemoveProduct() {
        let product = this.ProductManagement.getAll();
        console.log("**Xóa Sản Phẩm**");
        for (const products of product) {
            console.log(`${products.productCode},${products.name},${products.type},${products.price},${products.amount},${products.createDay},${products.description}`);
        }
        let ProductCodeRemove = +rl.question("Nhập mã hàng mà bạn muốn xóa");
        let lengthProduct = product.length;
        this.ProductManagement.removeByProductCode(ProductCodeRemove);
        if (lengthProduct !== product.length) {
            console.log("Xóa sản phẩm thành công");
        }
        else {
            console.log("xin thử lại");
        }
    }
    UpdateProduct() {
        let products = this.ProductManagement.getAll();
        console.log("Sửa thông tin sản phẩm");
        for (let i = 0; i < product_1.Product.length; i++) {
            console.log(`${i + 1},${products[i].name},${products[i].type},${products[i].price},${products[i].amount},${products[i].createDay},${products[i].description}`);
        }
        let ProductCode = +rl.question("Chọn sản phẩm muốn sửa");
        let indexUpdate = this.ProductManagement.findByProductCode(ProductCode);
        if (indexUpdate !== -1) {
            let Product = this.inputProduct();
            Product.productCode = ProductCode;
            this.ProductManagement.UpdateByProductCode(ProductCode, Product);
            console.log("Sản phẩm đã được thay đổi");
        }
        else {
            console.log("Nhập sai mã sản phẩm");
        }
    }
    inputProduct() {
        let name = rl.question("nhập tên: ");
        let type = rl.question("nhập thể loại: ");
        let price = +rl.question("nhập giá: ");
        let amount = +rl.question("nhập số lượng: ");
        let createDay = rl.question("nhập ngày nhập sản phẩm: ");
        let description = rl.question("nhập Mô tả: ");
        return new product_1.Product(name, type, price, amount, createDay, description);
    }
}
exports.ProductMenu = ProductMenu;
