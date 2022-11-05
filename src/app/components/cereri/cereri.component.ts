import { Component, OnInit } from '@angular/core';


interface Food {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-cereri',
  templateUrl: './cereri.component.html',
  styleUrls: ['./cereri.component.css']
})
export class CereriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: Food[] = [
    {value: 'cerere-1', viewValue: 'Cerere 1'},
    {value: 'cerere-2', viewValue: 'Cerere 2'},
    {value: 'cerere-3', viewValue: 'Cerere 3'},
  ];

}
