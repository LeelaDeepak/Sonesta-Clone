import { Component } from '@angular/core';

@Component({
  selector: 'app-newlyopened-hotels',
  standalone: true,
  imports: [],
  templateUrl: './newlyopened-hotels.component.html',
  styleUrl: './newlyopened-hotels.component.css'
})
export class NewlyopenedHotelsComponent {

  firstHotels=[
    {
        imgUrl:"/assets/hotel1.webp",
        title:"The Royal Sonesta Washington, DC Capitol Hill",
        desc:"Our newest Royal Sonesta hotel is now open! Join us for an artfully inspired stay just steps from DC’s business, cultural, and political centers.",
        btn:"Explore D.C. Hotel" 
    },
    {
      imgUrl:"/assets/hotel2.webp",
      title:"Nautilus Sonesta Miami Beach",
      desc:"In the heart of South Beach, our new oceanfront hotel features premier rooms and suites, a saltwater pool, direct beach access, and much more for an ideal Miami vacation.",
      btn:"Explore Miami Hotel"
    },
    {
      imgUrl:"/assets/hotel3.webp",
      title:"Sonesta Essential Indianapolis Airport",
      desc:"New brand, new hotel! Settle into comfortable, modern rooms and make the most of an indoor pool, gym, and free breakfast at our Plainfield hotel.",
      btn:"Explore Plainfield Hotel"
    }
  ];

  secondHotels=[
    {
      imgUrl:"/assets/hotel4.webp",
      title:"Red Lion Hotel Gillette",
      desc:"Located in scenic Gillette, WY, our newest Red Lion Hotel is ideal for guests in town on business or those en route to one of the state's many national parks.",
      btn:"Explore Gillette Hotel"
    },
    {
      imgUrl:"/assets/hotel5.webp",
      title:"Signature Inn San Francisco Marina District",
      desc:"With stylish rooms, a retro-modern atmosphere, and efficient amenities, our new Signature Inn delivers a fun and vibrant stay.",
      btn:"Explore San Francisco Hotel"
    },
    {
      imgUrl:"/assets/hotel6.webp",
      title:"Sonesta Simply Suites Lafayette Airport",
      desc:"Our recently opened Sonesta Simply Suites, featuring on-site dining, is ideal for short and long-term guests visiting for work or exploring the city's Creole.",
      btn:"Explore Lafayette Hotel"
    }
  ];

}
