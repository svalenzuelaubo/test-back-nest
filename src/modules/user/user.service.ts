import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAll = async (): Promise<User[]> => {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      throw new Error();
    }
  };

  getById = async (userId: number): Promise<User> => {
    try {
      return await this.usersRepository.findOne({
        where: { userId },
      });
    } catch (err) {}
  };

  create = async (user : User): Promise<User> => {
    try {
      return await this.usersRepository.save(user);
    } catch (err) {}
  };

  delete = async (userId: number): Promise<any> => {
    try {
      let user= await this.usersRepository.findOne({
        where: { userId },
      });
      if(user){
        return await this.usersRepository.remove(user);
      }else{
        return "usuario no encontrado para eliminar";
      }
    } catch (err) {}
  };

  update = async (user: User): Promise<User> => {
    try {
      return await this.usersRepository.save(user);
    } catch (err) {}
  };

  login = async (email: string,password: String): Promise<any> => {
    try {
      let user =await this.usersRepository.findOne({
        where: { email,password },
      });
      console.log(user);
      if(user){
        return user;
      }else{
        return "credenciales erroneas";
      }

    } catch (err) {}
  };
}
