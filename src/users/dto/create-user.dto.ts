import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmpty({ message: 'You cannot provide the id' })
  id: string;

  @ApiProperty({
    required: true,
    description: '유저 이메일',
    example: 'alex@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    required: true,
    description: 'password',
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
