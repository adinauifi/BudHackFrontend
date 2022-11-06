import { Component, OnInit } from '@angular/core';
import { PlataDetails, Plati, PlatiPlatite } from './plata/plata-details';

@Component({
  selector: 'app-taxe-impozite',
  templateUrl: './taxe-impozite.component.html',
  styleUrls: ['./taxe-impozite.component.css']
})
export class TaxeImpoziteComponent implements OnInit {

  plati!: PlataDetails[];
  platiAchitate!: PlataDetails[];

  constructor() { 
    this.plati = Plati;
    this.platiAchitate = PlatiPlatite;
  }

  ngOnInit(): void {
  }

}
