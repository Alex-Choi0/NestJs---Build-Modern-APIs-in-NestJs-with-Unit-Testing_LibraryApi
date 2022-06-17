import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('User API')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'get all user info',
    description: '모든 유저의 정보를 불러온다.',
  })
  getAllUser() {
    return this.userService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'create user', description: '유저를 생성한다' })
  createUser(@Body() body: CreateUserDto) {
    const { email, password } = body;
    return this.userService.create(email, password);
  }
}
