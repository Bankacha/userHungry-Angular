import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private pollsService: PollsService,
    private router: Router
  ) { }

  ngOnInit(): any {
    this.restaurantsService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data
      console.log(this.restaurants)
    })
  }

  notExistsInChosen(id: string) {
    return !this.chosenRestaurants.find(item => item.id === id)
  }

  addToChosen(restaurant: any) {
    this.chosenRestaurants.push(restaurant)
  }

  removeFromChosen(id: string) {
    this.chosenRestaurants = this.chosenRestaurants.filter(item => item.id !== id)
  }

  createNewPoll() {
    const idList: string[] = this.chosenRestaurants.map(item => item.id)

    if (this.pollLabel) {
      this.pollsService.createPoll(this.pollLabel, idList).subscribe(data => {
        console.log(data)
        this.chosenRestaurants = [];
        this.pollLabel = '';
        this.router.navigate(['polls'])
      })
    } else {
      this.setWarning = true;
    }

  }
}
