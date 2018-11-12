import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    players: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
      let observable = this._httpService.getPlayers();
      observable.subscribe(players => {
          console.log(players);
          this.players = players;
      })
  }

  deletePlayer(id) {
    if(confirm("Are you sure you want to delete this player?")) {
        let observable = this._httpService.deletePlayer(id);
        observable.subscribe(result => {
            console.log(result);
            this.getPlayers();
        })   
    }
  }

}
