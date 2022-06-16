import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('User API')
@Controller('users')
export class UsersController {
    constructor(
        private userService : UsersService
    ){}

    @Get()
    @ApiOperation({summary : 'get all user info', description: '모든 유저의 정보를 불러온다.'})
    getAllUser(){
        return this.userService.findAll()
    }

    @Post()
    @ApiOperation({summary : 'create user', description: '유저를 생성한다'})
    createUser(@Body() body : {email : string, password : string}){
        const {email, password} = body;
        return this.userService.create(email, password)
    }
    
}
