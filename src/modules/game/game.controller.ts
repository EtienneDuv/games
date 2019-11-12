import { Controller, Get, Query, Render } from '@nestjs/common';
import { GameService } from './game.service';
import { CallService } from '../call/call.service'

@Controller('games')
export class GameController {

  constructor(
    private readonly gameService: GameService,
    private readonly callService: CallService,
  ) {}

  @Get('/')
  @Render('gamesData')
  async getGamesData(@Query() query) {
    try {
      const askedGame = query.name;
      const res = await this.gameService.getGames(askedGame);
      const data = this.gameService.trimGameData(res);
      this.callService.logRequest(askedGame)
        .then(() => { console.log("Logged request")})
        .catch((error) => { throw error});
      return {
        gamesData: data,
        message: `What we found with "${askedGame}"`
      }
    } catch (e) {
      throw Error(e);
    }
  }
}
