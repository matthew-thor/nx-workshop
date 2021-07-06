import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public formatRating = formatRating;
  public title = 'Board Game Hoard';

  constructor(private _http: HttpClient) {}

  public games = this._http.get<any[]>('/api/games');
}
