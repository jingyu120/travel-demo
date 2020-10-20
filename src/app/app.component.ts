import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Justin Zhang';
  fromAirport: string = "";
  toAirport: string = "";
  numPassenger: number = 0;
  result: number = 0;
  calc(): void{
    this.result = this.numPassenger * 150;
  }
}

