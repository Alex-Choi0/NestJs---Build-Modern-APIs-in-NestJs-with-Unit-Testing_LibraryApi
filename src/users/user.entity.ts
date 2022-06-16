import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    @IsNotEmpty()
    @IsString()
    email: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    password : string
}