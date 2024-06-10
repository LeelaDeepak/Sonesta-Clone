import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-second-navbar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './second-navbar.component.html',
  styleUrl: './second-navbar.component.css'
})
export class SecondNavbarComponent {
  // today = new Date();
  // tommorow = new Date();
  // constructor(){
  //   this.tommorow.setDate(this.tommorow.getDate() + 1);
  // }
  today: string;
  tomorrow: string;

  constructor() {
    const currentDate = new Date();
    this.today = this.formatDate(currentDate);
    const tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    this.tomorrow = this.formatDate(tomorrowDate);
  }

  private formatDate(date: Date): string {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${date.toLocaleString('default', { month: 'short' })} ${day}`;
  }

}
