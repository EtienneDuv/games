import { Controller, Get, Query, Render } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('games')
export class GameController {

  constructor(
    private readonly gameService: GameService,
  ) {}

  @Get('/')
  @Render('gamesData')
  async getGamesData(@Query() query) {
    try {
      const askedGame = query.name;
      const res = await this.gameService.getGames(askedGame);
      const data = this.gameService.trimGameData(res);
      return {
        gamesData: data,
        message: `What we found with "${askedGame}"`
      }
    } catch (e) {
      throw Error(e);
    }
  }
}
