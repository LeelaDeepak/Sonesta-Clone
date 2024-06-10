import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-footer',
  standalone: true,
  imports: [],
  templateUrl: './pg-footer.component.html',
  styleUrl: './pg-footer.component.css'
})
export class PgFooterComponent {

  stayList=["Special Offers","Locations","Meetings & Events","Egypt Hotels & Cruises","Extended Stay Hotels","Pet-Friendly Hotels"];
  supportList=[];
  companyList=[];
  webisteList=[];

}
