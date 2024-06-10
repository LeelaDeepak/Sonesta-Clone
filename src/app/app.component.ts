import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstNavBarComponent } from './first-nav-bar/first-nav-bar.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { BannerComponent } from './banner/banner.component';
import { OffersComponent } from './offers/offers.component';
import { TravelpassComponent } from './travelpass/travelpass.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { SpecialFeaturesComponent } from './special-features/special-features.component';
import { NewlyopenedHotelsComponent } from './newlyopened-hotels/newlyopened-hotels.component';
import { NewlyrenovatedhotelsComponent } from './newlyrenovatedhotels/newlyrenovatedhotels.component';
import { PgFooterComponent } from './pg-footer/pg-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstNavBarComponent,SecondNavbarComponent,BannerComponent,OffersComponent,TravelpassComponent,FeaturedBannerComponent,DestinationsComponent,SpecialFeaturesComponent,NewlyopenedHotelsComponent,NewlyrenovatedhotelsComponent,PgFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SonestaCloneApp';

  firstFeaturedBanner={
    bgColor:"#fff",
    imgUrl:"/assets/fdOne.webp",
    desc:"Our free breakfast just got an upgrade. With tasty baked goods and grains, a make-your-own-pancake machine, and an egg station with—wait for it—breakfast tacos, you’ll wish tomorrow morning would hurry up and arrive.",
    btnTxt:"Learn More",
    title:"Look What We've Cooked Up",
    tagLine:"ES SUITES BREAKFAST"
  }

  secondFeaturedBanner={
    bgColor:"rgb(240, 240, 240)",
    imgUrl:"/assets/fdTwo.webp",
    desc:"The Red Lion Family of Hotels has joined Sonesta. Now with 15 industry-leading brands to choose from, you have access to over 1,100 hotels offering a wide range of hospitality experiences across the U.S. and beyond.",
    btnTxt:"Explore Our Brands",
    title:"RLH Brands",
    tagLine:"OUR FAMILY HAS GROWN"
  }
}
