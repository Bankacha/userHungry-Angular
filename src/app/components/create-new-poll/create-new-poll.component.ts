import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/services/polls-service.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-create-new-poll',
  templateUrl: './create-new-poll.component.html',
  styleUrls: ['./create-new-poll.component.scss']
})
export class CreateNewPollComponent implements OnInit {

  restaurants: any[] = [];

  chosenRestaurants: any[] = [];

  pollLabel: string = ''

  setWarning = false;

  constructor(
    private restaurantsService: RestaurantsService,
    private pollsService: PollsService
  ) { }

  ngOnInit(): any {
    this.restaurantsService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data
      console.log(this.restaurants)
    })
  }

  moveRestaurant(id: string, from: any, to: any) {
    from.forEach((item: any) => item?.id === id ? to?.push(item) : '')
  }

  addToChosen(id: string) {
    this.moveRestaurant(id, this.restaurants, this.chosenRestaurants)
    this.restaurants = this.restaurants.filter(item => item.id !== id)
  }

  removeFromChosen(id: string) {
    this.moveRestaurant(id, this.chosenRestaurants, this.restaurants)
    this.chosenRestaurants = this.chosenRestaurants.filter(item => item.id !== id)
  }

  createNewPoll() {
    const idList: string[] = this.chosenRestaurants.map(item => item.id)

    if (this.pollLabel) {
      this.pollsService.createPoll(this.pollLabel, idList).subscribe(data => {
        console.log(data)
        this.chosenRestaurants = [];
      })
    } else {
      this.setWarning = true;
    }

  }
}
