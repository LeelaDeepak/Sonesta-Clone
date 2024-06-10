import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {


  firsttrendingDest=[
    {
      imgUrl:"/assets/miamiOffice.webp",
      title:"Miami, FL",
      desc:"Make the most of Miami’s endless sunshine, inviting beaches, colorful art scene, and eclectic dining.",
      btn:"Explore Miami Hotels"
    },
    {
      imgUrl:"/assets/houstonOffice.webp",
      title:"Houston, TX",
      desc:"Catch a rodeo and savor delicious Texas barbeque or take in impressive museums and galleries around the city.",
      btn:"Explore Houston Hotels"
    },
    {
      imgUrl:"/assets/SeattleOffice.webp",
      title:"Seattle, WA",
      desc:"Wander around this enticing city with world famous coffee in hand and admire the Mt. Rainier backdrop.",
      btn:"Explore Seattle Hotels"
    }
  ];

  secondtrendingDest=[
    {
      imgUrl:"/assets/anaheimOffice.webp",
      title:"Anaheim, CA",
      desc:"Take the trip of a lifetime to Disneyland®, indulge in great shopping & dining, or attend a conference event.",
      btn:"Explore Anaheim Hotels"
    },
    {
      imgUrl:"/assets/torantoOffice.webp",
      title:"Toronto, ON",
      desc:"Make your way to Ontario for an adventure in one of Canada's most iconic and exciting cities.",
      btn:"Explore Toronto Hotels"
    },
    {
      imgUrl:"/assets/chicagoOffice.webp",
      title:"Chicago, IL",
      desc:"Immerse yourself in striking architecture, a plethora of cultural attractions, and diverse dining.",
      btn:"Explore Chicago Hotels"
    }
  ]
}
