import { Component } from '@angular/core';


export interface Card{
  title: string,
  bodyText: string,
  showImg: boolean,
  url:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web Technologies Project';
  
}
