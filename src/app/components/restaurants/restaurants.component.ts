import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data;
    })
  }

}
