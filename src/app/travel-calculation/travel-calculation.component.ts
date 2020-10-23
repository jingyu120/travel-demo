import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-calculation',
  templateUrl: './travel-calculation.component.html',
  styleUrls: ['./travel-calculation.component.sass']
})
export class TravelCalculationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fromAirport: string = "";
  toAirport: string = "";
  numPassenger: number = 0;
  result: number = 0;
  calc(): void{
    this.result = this.numPassenger * 150;
  }

}
