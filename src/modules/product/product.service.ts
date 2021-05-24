import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  getAll = async (): Promise<Product[]> => {
    try {
      return await this.productsRepository.find();
    } catch (error) {
      throw new Error();
    }
  };

  getById = async (handle: string): Promise<Product> => {
    try {
      return await this.productsRepository.findOne({
        where: { handle },
      });
    } catch (err) {}
  };

  create = async (product : Product): Promise<Product> => {
    try {

        let newProduct = await this.productsRepository.save(product);
        console.log(newProduct);
        return newProduct;
    } catch (err) {}
  };

  delete = async (handle: string): Promise<any> => {
    try {
      let product= await this.productsRepository.findOne({
        where: { handle },
      });
      if(product){
        await this.productsRepository.remove(product);
        return "producto eliminado";
      }else{
        return "producto no encontrado para eliminar";
      }
    } catch (err) {}
  };

  update = async (product: Product): Promise<Product> => {
    try {
      return await this.productsRepository.save(product);
    } catch (err) {}
  };

}
