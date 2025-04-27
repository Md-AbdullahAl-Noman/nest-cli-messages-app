import { IsString } from 'class-validator';
export class CreateMessageDto {
  @IsString({ message: 'message must be a string bro' })
  message: string;
}
