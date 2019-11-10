import { IsNotEmpty } from 'class-validator';

export class GameDTO {
    @IsNotEmpty()
    gameName: string;
}