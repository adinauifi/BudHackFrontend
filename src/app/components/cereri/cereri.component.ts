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
        {value: '1', viewValue: 'DEVERINŢĂ PENTRU OBŢINEREA AVIZULUI CONSULTATIV'},
        {value: '2', viewValue: 'Cerere 2'},
        {value: '3', viewValue: 'Cerere 3'},
    ];
    cereri: Cerere[] = [
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 'In curs de procesare', name: 'Cerere 1'},
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 'In curs de procesare', name: 'Cerere 2'},
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 'Respinsa', name: 'Cerere 3'},
        {id: 1, requestorId: 1, type: 1, documents: [], dateCreated: new Date(), status: 'Acceptata', name: 'Cerere 4'},
    ];

  constructor() { }

  ngOnInit(): void {
  }

  selectionChanged(event: any) {
    console.log(event);
    switch(event.value) {
        case '1':
            this.documents = [
                {name: 'Copie buletin', content: 'base64', exists: true},
                {name: 'Copie certificat nastere', content: 'base64', exists: true},
                {name: 'Copie bla bla 1', content: 'base64', exists: false},
                {name: 'Copie bla bla 2', content: 'base64', exists: false}
            ];
            break;
        case '2':
            this.documents = [
                {name: 'Copie buletin', content: 'base64', exists: true},
                {name: 'Copie certificat nastere', content: 'base64', exists: true},
                {name: 'Copie bla bla 1', content: 'base64', exists: false}
            ];
            break;
        case '3':
            this.documents = [
                {name: 'Copie buletin', content: 'base64', exists: true},
                {name: 'Copie certificat nastere', content: 'base64', exists: true}
            ];
    }
  }

  consoleLog(event: any, name: string) {
    console.log(event);
    switch (event.source.id) {
        case 'mat-checkbox-1':
            this.documents[0].exists = event.checked
            break;
        case 'mat-checkbox-2':
            this.documents[1].exists = event.checked
            break;
        case 'mat-checkbox-3':
            this.documents[2].exists = event.checked
            break;
        case 'mat-checkbox-4':
            this.documents[3].exists = event.checked
            console.log(this.documents);
            break;
    }
  }

  validateSendButton() {}
}
