import { IsNotEmpty, IsString } from 'class-validator';
import { Book } from 'src/books/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;

  @OneToMany(() => Book, (books) => books.user)
  books: Book[];
}
