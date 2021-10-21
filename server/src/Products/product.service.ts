import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../Models/product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async getAllProducts() {
    return this.productModel.findAll();
  }

  async getProduct(id: string) {
    return this.productModel.findOne({
      where: {
        id,
      },
    });
  }

  async createProduct(product: Product) {
    return this.productModel.create(product);
  }

  async removeProduct(id: string) {
    return this.productModel.destroy({ where: { id } });
  }
}
