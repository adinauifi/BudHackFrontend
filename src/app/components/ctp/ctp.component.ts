import { Component, OnInit } from '@angular/core';
import { faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ctp',
  templateUrl: './ctp.component.html',
  styleUrls: ['./ctp.component.css']
})
export class CTPComponent implements OnInit {
  faBus = faBus;
  constructor() { }

  ngOnInit(): void {
  }

}
