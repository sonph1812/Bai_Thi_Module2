"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    CreateNew(products) {
        ProductManagement.productCode++;
        products.productCode = ProductManagement.productCode;
        ProductManagement.products.push(products);
    }
    getAll() {
        return ProductManagement.products;
    }
    findByProductCode(productCode) {
        let index = -1;
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].productCode == productCode) {
                index = i;
            }
        }
        return index;
    }
    removeByProductCode(index) {
        let indexRemove = this.findByProductCode(index);
        if (indexRemove !== -1) {
            ProductManagement.products.splice(index, 1);
        }
    }
    findByProductName(name) {
        for (let products of ProductManagement.products) {
            if (name == products.name) {
                return products;
                break;
            }
        }
        return null;
    }
    UpdateByProductCode(index, products) {
        let indexUpdate = this.findByProductCode(index);
        if (indexUpdate !== -1) {
            ProductManagement.products[indexUpdate] = products;
        }
    }
    push(product) {
        ProductManagement.products.push(product);
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.products = [];
ProductManagement.productCode = 0;
