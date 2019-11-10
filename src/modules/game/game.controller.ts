import { Controller, Get, Query, Render } from '@nestjs/common';
import { GameService } from './game.service';
import { IRequestedGame } from './interfaces/requestedGame.interface'

@Controller('games')
export class GameController {

  constructor(
    private readonly gameService: GameService,
  ) {}

  @Get('/')
  @Render('gamesData')
  async getGamesData(@Query() query: IRequestedGame) {
    try {
      const gameName = query.name
      let res = await this.gameService.getGames(gameName);
      return {
        response: res,
        message: `What we found with "${gameName}"`
      }
    } catch (e) {
      throw Error(e);
    }
  }
}
