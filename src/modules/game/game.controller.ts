import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { GameDTO } from './game.dto'

@Controller('games')
export class GameController {

  constructor(
    private readonly gameService: GameService,
  ) {}

  @Get('/')
  async getGameInfo(@Query() query: GameDTO) {
    try {
      const gameName = query.gameName
      const res = await this.gameService.getGame(gameName);
      return res
    } catch (e) {
      throw Error(e);
    }
  }
}
