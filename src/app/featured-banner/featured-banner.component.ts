import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-banner',
  standalone: true,
  imports: [],
  templateUrl: './featured-banner.component.html',
  styleUrl: './featured-banner.component.css'
})
export class FeaturedBannerComponent {

  @Input() tagline!:string;
  @Input() title!:string;
  @Input() desc!:string;
  @Input() btnText!:string;
  @Input() bgColor!:string;
  @Input() imgUrl!:string;

}
