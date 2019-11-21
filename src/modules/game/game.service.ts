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

  /** Get data from CheapShark API */
  private async fetchGames(gameName: string): Promise<AxiosResponse> {
    const res = await Axios.get(`http://www.cheapshark.com/api/1.0/deals?storeID=1&desc=0&title=${gameName}&pageSize=20`);
    if (res.status === 200) {
      return res;
    }
    throw new Error('Error fetching games data');
  }

  /** Format data to IGame interface format */
  public trimGameData(gamesData: ICheapSharkResponse[]) {
    let trimmedData: IGame[] = []
    gamesData.forEach((gameData, i) => {
      let date;
      if (gameData.releaseDate === 0) {
        date = "Unknown"
      } else {
        date = new Date(1000 * gameData.releaseDate).toLocaleDateString() 
      }
      trimmedData.push({
        name: gameData.title,
        salePrice: parseInt(gameData.normalPrice),
        cheapestPrice: parseInt(gameData.salePrice),
        releaseDate: date,
      });
    })
    return trimmedData
  }
}
