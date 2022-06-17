import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('Book API')
@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  @ApiOperation({
    summary: 'get all books',
    description: '책을 모두 조회한다',
  })
  async getAllBooks() {
    return this.bookService.findAll();
  }

  @Post()
  @ApiOperation({
    summary: 'create book',
    description: '책을 생성한다',
  })
  createBook(@Body() body: CreateBookDto) {
    const user = {
      id: '27775ecd-793f-475e-aedc-8adde09d79c4',
      email: 'test@gmail.com',
      password: '12345678',
    };

    return this.bookService.create(body, user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'get book by id',
    description: 'id를 이용하여 책을 조회한다.',
  })
  async findById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update book',
    description: 'id를 이용하여 책을 업데이트 한다.',
  })
  async updateBook(
    @Param('id') id: string,
    @Body() body: UpdateBookDto,
  ): Promise<Book> {
    return await this.bookService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete book',
    description: 'id를 이용하여 책을 삭제 한다.',
  })
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return await this.bookService.remove(id);
  }
}
