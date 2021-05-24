import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('api/products')
export class ProductsController {
  constructor(private ProductService: ProductService) {}
  @Get()
  getAll() {
    return this.ProductService.getAll();
  }

  @Get(':handle')
  getById(@Param('handle') handle: string) {
    return this.ProductService.getById(handle);
  }

  @Post()
  create(@Body() product:Product): any{
    return this.ProductService.create(product);
  }

  @Delete(':handle')
  delete(@Param('handle') handle: string) {
    
    return  this.ProductService.delete(handle);
  }

  @Put(':handle')
  put(@Body() product) {
    return this.ProductService.update(product);
  }
}
