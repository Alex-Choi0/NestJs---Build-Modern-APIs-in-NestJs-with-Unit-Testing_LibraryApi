import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    required: true,
    description: '도서 이름',
    example: '코딩 잘하는법',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
    description: '가격 won',
    example: 100000,
  })
  @IsNotEmpty()
  @IsString()
  price: number;

  @ApiProperty({
    required: true,
    description: '저자',
    example: '알렉스',
  })
  @IsNotEmpty()
  @IsString()
  author: string;
}
