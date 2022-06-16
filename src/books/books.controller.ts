import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('Book API')
@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  @ApiOperation({
    summary: 'create book',
    description: '책을 생성한다',
  })
  createBook(@Body() body: CreateBookDto) {
    return this.bookService.create(body);
  }
}
