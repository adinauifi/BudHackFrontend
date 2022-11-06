import { Component, Input, OnInit } from '@angular/core';
import { PlataDetails } from './plata-details';

@Component({
  selector: 'app-plata',
  templateUrl: './plata.component.html',
  styleUrls: ['./plata.component.css']
})
export class PlataComponent implements OnInit {

  @Input() plataDetails!: PlataDetails;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
