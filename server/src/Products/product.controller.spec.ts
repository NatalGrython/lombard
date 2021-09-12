import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.contoller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let appController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    appController = app.get<ProductController>(ProductController);
  });

  describe('Root endpoints', () => {
    it('Should return Products', () => {
      expect(appController.getProducts());
    });
  });
});
