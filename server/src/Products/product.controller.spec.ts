import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../Models/product.model';
import { ProductController } from './product.contoller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  const mockData = [{ id: 1, name: 'Test', price: 3000 }];
  let productController: ProductController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
          provide: getModelToken(Product),
          useValue: {
            findAll: jest.fn(() => mockData),
            findOne: jest.fn(({ where: { id } }) =>
              mockData.find((item) => item.id === Number(id)),
            ),
            create: jest.fn((data) => {
              mockData.push(data);
            }),
            destroy: jest.fn(({ where: { id } }) =>
              mockData.splice(
                mockData.findIndex((item) => item.id === Number(id)),
                1,
              ),
            ),
          },
        },
      ],
    }).compile();

    productController = moduleRef.get<ProductController>(ProductController);
  });

  describe('Product CRUD', () => {
    it('Should be return all products', async () => {
      expect(await productController.getProducts()).toBe(mockData);
    });
    it('Should be return product by id', async () => {
      const mockId = 1;
      expect(await productController.getProduct(String(mockId))).toBe(
        mockData[0],
      );
    });
    it('Should be create product', async () => {
      const mockProduct = {
        name: 'Test',
        price: 2000,
        id: 2,
      } as Product;
      expect(await productController.createProduct(mockProduct));
      expect(await productController.getProduct(String(mockProduct.id))).toBe(
        mockProduct,
      );
    });
    it('Should be delete product', async () => {
      const mockProduct = {
        name: 'Test',
        price: 2000,
        id: 3,
      } as Product;
      expect(await productController.createProduct(mockProduct));
      expect(await productController.getProduct(String(mockProduct.id))).toBe(
        mockProduct,
      );
      expect(await productController.removeProduct(String(mockProduct.id)));
      expect(
        await productController.getProduct(String(mockProduct.id)),
      ).toBeUndefined();
    });
  });
});
