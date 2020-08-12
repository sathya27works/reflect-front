import { Component } from '@angular/core';
import { DataService } from './service/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'reflect-base';
  menuVisible: boolean = true;

}
