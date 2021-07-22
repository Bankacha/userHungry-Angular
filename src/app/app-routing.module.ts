import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollsComponent } from './components/polls/polls.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateNewPollComponent } from './components/create-new-poll/create-new-poll.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LogInComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'polls',
        component: PollsComponent,
      },
      {
        path: 'create',
        component: CreateNewPollComponent
      },
      {
        path: 'restaurants',
        component: RestaurantsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
