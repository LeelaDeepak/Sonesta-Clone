import { Component } from '@angular/core';

@Component({
  selector: 'app-special-features',
  standalone: true,
  imports: [],
  templateUrl: './special-features.component.html',
  styleUrl: './special-features.component.css'
})
export class SpecialFeaturesComponent {

  specials=[
    {
      imgUrl:"/assets/sf1.webp",
      title:"Online Offer",
      desc:"Earn Up to 95,000 Bonus Points - Enough for up to 9 Free Nights! Residents of the U.S. and its territories only. See full disclosure for details. Apply here for this offer. Offers vary elsewhere.",
      btn:"Apply Now"
    },
    {
      imgUrl:"/assets/sf2.webp",
      title:"Meetings & Events",
      desc:"Work meetings. Custom events. Weddings, reunions, and friends getaways. At Sonesta, we’re all about bringing your vision to life—and taking care of all those little details that make an event unforgettable.",
      btn:"Plan Events"
    }
  ]

}
