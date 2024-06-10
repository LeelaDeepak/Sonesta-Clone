import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {

  showSecondRow=false;

  showRow(){
    this.showSecondRow = !this.showSecondRow;
  }

  firstoffersData =[
    {
      title:"The Summer Sale",
      body:"Save up to 30% on summer stays and earn bonus points at participating hotels. The longer you stay, the more you save.",
      imgUrl:"assets/offerOne.webp",
      button:"BOOK NOW",
      learn:"Learn More"
    },
    {
      title:"Join Us for Breakfast",
      body:"Mornings just got better. Enjoy a mouthwatering start to the day’s discoveries with breakfast at Sonesta.",
      imgUrl:"assets/OfferTwo.webp",
      button:"BOOK NOW",
      learn:"Learn More"
    },
    {
      title:"Senior Rate",
      body:"Never lose your sense of wonder with Sonesta. Guests 55+ can save when booking with code SEN55.",
      imgUrl:"assets/Offerthree.webp",
      button:"BOOK NOW",
      learn:"Learn More"
    } 
  ];

  secondOffersData=[
    {
      title:"Save More with AAA",
      body:"Hit the road and save a bundle. AAA/CAA members enjoy discounts at our participating hotels.",
      imgUrl:"assets/Offerfour.webp",
      button:"BOOK NOW",
      learn:"Learn More"
    },
    {
      title:"Save More. Every Time.",
      body:"Sonesta Travel Pass members always enjoy our best rates. Book the Sonesta Travel Pass Member Rate and receive perks on your very first stay.",
      imgUrl:"assets/Offerfive.webp",
      button:"BOOK NOW",
      learn:"Learn More"
    },
    {
      title:"Bonus Points Package",
      body:"Earn a free night faster! Book the Sonesta Travel Pass Bonus Points package and get an extra 1,000 bonus points per night.",
      imgUrl:"assets/Offersix.webp",
      button:"BOOK NOW",
      learn:"Learn More"
    }
  ];

}
