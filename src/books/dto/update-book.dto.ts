import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {

  @IsEmpty({message : 'You cannot provide the id'})
  id : string

  @ApiProperty({
    required: false,
    description: '도서 이름',
    example: '코딩 잘하는법',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    description: '가격 won',
    example: 100000,
  })
  @IsOptional()
  @IsString()
  price: number;

  @ApiProperty({
    required: false,
    description: '저자',
    example: '알렉스',
  })
  @IsOptional()
  @IsString()
  author: string;
}
