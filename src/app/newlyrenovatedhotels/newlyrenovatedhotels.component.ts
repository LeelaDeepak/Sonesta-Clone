import { Component } from '@angular/core';

@Component({
  selector: 'app-newlyrenovatedhotels',
  standalone: true,
  imports: [],
  templateUrl: './newlyrenovatedhotels.component.html',
  styleUrl: './newlyrenovatedhotels.component.css'
})
export class NewlyrenovatedhotelsComponent {
  renovatedHotels=[
    {
      imgUrl:"/assets/hotel8.webp",
      title:"Sonesta Simply Suites Jersey City",
      desc:"Make the most of our refreshed suites, fitness center, and laundry room at our Hudson River hotel.",
      btn:"Explore Jersey City Hotel"
    },
    {
      imgUrl:"/assets/hotel9.webp",
      title:"Sonesta Select Scottsdale at Mayo Clinic Campus",
      desc:"Discover beautifully updated guest rooms and public spaces in sunny Scottsdale.",
      btn:"Explore Scottsdale Hotel"
    },
    {
      imgUrl:"/assets/hotel10.webp",
      title:"Sonesta ES Suites San Diego - Sorrento Mesa",
      desc:"Experience our newly renovated guest rooms, ideal for both business and leisure travelers alike.",
      btn:"Explore San Diego Hotel"
    },
  ];
}
