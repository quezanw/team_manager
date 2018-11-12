import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  new_player: any;
  error: any;
  success: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.new_player = {}
  }

  submitPlayer() {
    let observable = this._httpService.postPlayer(this.new_player);
    observable.subscribe(data => {
      if (data['errors']) {
          this.error = data['errors']['name']['message'];
          this.success = ""
      } else {
        this.error = "";
        this.success = "Player Created."
        this.new_player = {};
    }
    });
  }

}
