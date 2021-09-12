import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from 'src/Models/product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Post()
  async createProduct(@Body() product: Product) {
    console.log(product);
    return this.productService.createProduct(product);
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    return this.productService.removeProduct(id);
  }
}
