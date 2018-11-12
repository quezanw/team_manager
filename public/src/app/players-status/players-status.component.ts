import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-players-status',
  templateUrl: './players-status.component.html',
  styleUrls: ['./players-status.component.css']
})
export class PlayersStatusComponent implements OnInit {
  players: any;
  game: any;
  gameNumber: Number;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this.gameNumber = params['num'];
        this.getGame(params['num']);
    });
  }

  getGame(gameNumber) {
    let observable = this._httpService.getGameById(gameNumber);
    observable.subscribe(data => {
        console.log(data);
        this.game = data['players'];
    });
  }

  updateStatus(playerId, status) {
    let observable = this._httpService.update(this.gameNumber, {id: playerId, gameStatus: status});
    observable.subscribe(data => {
        console.log(data);
        this.getGame(this.gameNumber);
    })    
  }

}
