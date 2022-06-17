import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo : Repository<User>
    ){}

    async findAll() : Promise<User[]> {
        return this.repo.find();
    }

    async create(email : string, password  : string){
        const user = this.repo.create({email, password});
        return await this.repo.save(user);
    }

}