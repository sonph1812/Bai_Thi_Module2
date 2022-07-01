import * as rl from "readline-sync";
import { ProductManagement } from "../management/management";
import { Product } from "../model/product";

enum ProductChoice {
    SHOW_ALL_PRODUCT = 1,
    SEARCH_PRODUCT_BY_NAME = 2,
    ADD_NEW_PRODUCT,
    UPDATE_PRODUCTS,
    REMOVE_PRODUCTS = 5
}

export class ProductMenu {
    private ProductManagement = new ProductManagement();

    run() {
        let choice = -1;
        do {
            console.log('---Quản Lý Sản Phẩm---');
            console.log('1, Hiển thị tất cả sản phẩm');
            console.log('2, Tìm kiếm sản phẩm theo tên');
            console.log('3, Thêm sản phẩm');
            console.log('4, Cập nhật sản phẩm');
            console.log('5, Xóa sản phẩm');
            console.log('6, Quay lại')
            choice = +rl.question("nhập lựa chọn ")
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT: {
                    this.ShowAllProducts();
                    break;

                }
                case ProductChoice.SEARCH_PRODUCT_BY_NAME: {
                    this.SearchProductBYName();
                    break

                }
                case  ProductChoice.ADD_NEW_PRODUCT: {
                    this.CreateProduct();
                    break

                }
                case ProductChoice.UPDATE_PRODUCTS: {
                    this.UpdateProduct();
                    break
                }
                case ProductChoice.REMOVE_PRODUCTS: {
                    this.RemoveProduct()
                    break
                }
            }


        } while (choice != 0)
    }

    CreateProduct() {
        console.log("**Tạo Sản phẩm mới**")
        let product = this.inputProduct();
        this.ProductManagement.CreateNew(product);
        console.log("thêm sản phẩm thành công")
    }

    ShowAllProducts() {
        console.log("**Danh sách sản phẩm**");
        let products = this.ProductManagement.getAll();
        for (let i = 0; i < products.length; i++) {
            console.log(`${i + 1},${products[i].name},${products[i].type},${products[i].price},${products[i].amount},${products[i].createDay},${products[i].description}`)

        }
    }

    SearchProductBYName() {
        let search: string = rl.question('Nhập tên sản phẩm muốn tìm: ')
        let searchProduct = this.ProductManagement.findByProductName(search)
        if (searchProduct) {
            console.log("kết quả")
            console.table(searchProduct)
        } else {
            console.log("Không có dữ liệu phù hợp")
        }

    }

    RemoveProduct(): void {
        let product = this.ProductManagement.getAll();
        console.log("**Xóa Sản Phẩm**")
        for (const products of product) {
            console.log(`${products.productCode},${products.name},${products.type},${products.price},${products.amount},${products.createDay},${products.description}`)
        }
        let ProductCodeRemove = +rl.question("Nhập mã hàng mà bạn muốn xóa");
        let lengthProduct = product.length;
        this.ProductManagement.removeByProductCode(ProductCodeRemove);
        if (lengthProduct !== product.length) {
            console.log("Xóa sản phẩm thành công")
        } else {
            console.log("xin thử lại")
        }
    }

    UpdateProduct(): void {
        let products = this.ProductManagement.getAll();
        console.log("Sửa thông tin sản phẩm")
        for (let i = 0; i < Product.length; i++) {
            console.log(`${i + 1},${products[i].name},${products[i].type},${products[i].price},${products[i].amount},${products[i].createDay},${products[i].description}`)

        }
        let Name = rl.question("Chọn sản phẩm muốn sửa")
        let nameUpdate = this.ProductManagement.findByProductName(Name)
        if (nameUpdate) {
            let name = rl.question("nhập tên: ")
            let type = rl.question("nhập thể loại: ")
            let price = +rl.question("nhập giá: ")
            let amount = +rl.question("nhập số lượng: ")
            let createDay = rl.question("nhập ngày nhập sản phẩm: ")
            let description = rl.question("nhập Mô tả: ")
            nameUpdate.name = name
            nameUpdate.type = type
            nameUpdate.price = price
            nameUpdate.amount = amount
            nameUpdate.createDay = createDay
            nameUpdate.description = description
            console.log("Sản phẩm đã được thay đổi")
        } else {
            console.log("Nhập sai mã sản phẩm")
        }
    }

    inputProduct(): Product {
        let name = rl.question("nhập tên: ")
        let type = rl.question("nhập thể loại: ")
        let price = +rl.question("nhập giá: ")
        let amount = +rl.question("nhập số lượng: ")
        let createDay = rl.question("nhập ngày nhập sản phẩm: ")
        let description = rl.question("nhập Mô tả: ")
        return new Product(name, type, price, amount, createDay, description)

    }
}
