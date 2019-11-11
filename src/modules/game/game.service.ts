import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import { ICheapSharkResponse } from './interfaces/cheapSharkResponse.interface';
import { IGame } from './interfaces/game.interface';

@Injectable()
export class GameService {

  public async getGames(gameName: string): Promise<ICheapSharkResponse[]> {
    const gamesList = await this.fetchGames(gameName);
    return gamesList.data;
  }

  private async fetchGames(gameName: string): Promise<AxiosResponse> {
    const res = await Axios.get(`http://www.cheapshark.com/api/1.0/deals?storeID=1&desc=0&title=${gameName}&pageSize=20`);
    if (res.status === 200) {
      return res;
    }
    throw new Error('Error fetching games data');
  }

  public trimGameData(gamesData: ICheapSharkResponse[]) {
    let trimmedData: IGame[] = []
    gamesData.forEach((gameData, i) => {
      trimmedData[i] = {
        name: gameData.title,
        salePrice: parseInt(gameData.normalPrice),
        cheapestPrice: parseInt(gameData.salePrice),
        releaseDate: new Date(1000 * gameData.releaseDate).toLocaleDateString(),
      };
    })
    return trimmedData
  }
}
