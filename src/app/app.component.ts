import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BudHackFrontend';  
  faUser = faUser;
  faFile = faFile;
  faMoneyBill = faMoneyBill1;
  faBus = faBus;
  faHouse = faHouse;  

}
