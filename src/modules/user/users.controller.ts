import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UsersDto } from './users.dto';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':userId')
  getById(@Param('userId') userId: number) {
    return this.userService.getById(userId);
  }

  @Post()
  create(@Body() user): any{
    return this.userService.create(user);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: number) {
    let result = this.userService.delete(userId);
    return result;
  }

  @Put(':userId')
  put(@Body() user) {
    return this.userService.update(user);
  }

  @Post('/login')
  login(@Body() user) {
    return this.userService.login(user.email,user.password);
  }
}
