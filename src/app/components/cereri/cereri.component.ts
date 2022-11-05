import { Component, OnInit } from '@angular/core';
import { Cerere } from './cerere';
import { DocumentDTO } from './document';


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

    documents: DocumentDTO[] = [
        {name: 'Copie buletin', content: 'base64', exists: true},
        {name: 'Copie certificat nastere', content: 'base64', exists: true},
        {name: 'Copie bla bla 1', content: 'base64', exists: false},
        {name: 'Copie bla bla 2', content: 'base64', exists: false},
    ];
    cereriCategorii: Food[] = [
        {value: 'cerere-1', viewValue: 'Cerere 1'},
        {value: 'cerere-2', viewValue: 'Cerere 2'},
        {value: 'cerere-3', viewValue: 'Cerere 3'},
    ];
    cereri: Cerere[] = [
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 1, name: 'Cerere 1'},
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 2, name: 'Cerere 2'},
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 3, name: 'Cerere 3'},
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 4, name: 'Cerere 4'},
    ];

  constructor() { }

  ngOnInit(): void {
  }



}
