import { Product } from "../model/product";

export class ProductManagement {
    private static products: Product[] = [];
    private static productCode: number = 0;

    CreateNew(products: Product) {
        ProductManagement.productCode++
        products.productCode = ProductManagement.productCode
        ProductManagement.products.push(products)
    }

    getAll(): Product[] {
        return ProductManagement.products
    }

    findByProductCode(productCode: number): number {
        let index = -1;
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].productCode == productCode) {
                index = i;
            }
        }
        return index

    }

    removeByProductCode(index: number): void {
        let indexRemove = this.findByProductCode(index);
        if (indexRemove !== -1) {
            ProductManagement.products.splice(index, 1);
        }
    }

    findByProductName(name: string): Product | null {
        for (let products of ProductManagement.products) {
            if (name == products.name) {
                return products
                break

            }

        }
        return null
    }
    UpdateByProductCode(index:number,products:Product):void{
        let indexUpdate = this.findByProductCode(index);
        if (indexUpdate !== -1){
            ProductManagement.products[indexUpdate]= products
        }
    }


    push(product: Product) {
        ProductManagement.products.push(product)

    }
}