import { Component, OnInit } from '@angular/core';
import { PlataDetails, Plati } from './plata/plata-details';

@Component({
  selector: 'app-taxe-impozite',
  templateUrl: './taxe-impozite.component.html',
  styleUrls: ['./taxe-impozite.component.css']
})
export class TaxeImpoziteComponent implements OnInit {

  plati!: PlataDetails[];
  constructor() { 
    this.plati = Plati;
  }

  ngOnInit(): void {
  }

}
