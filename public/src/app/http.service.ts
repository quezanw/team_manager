import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private _http: HttpClient) {}

  getPlayers() {
    return this._http.get('/api/players');
  }

  getGameById(id) {
    return this._http.get('/api/game/' + id);
  }

  getGames() {
      return this._http.get('/api/games');
  }

  postPlayer(player) {
    return this._http.post('/api/new_player', player);
  }

  update(gameNumber, player) {
    return this._http.put('/api/update/' + gameNumber, player);
  }

  deletePlayer(id) {
    return this._http.delete('/api/delete/' + id);
  }
}
