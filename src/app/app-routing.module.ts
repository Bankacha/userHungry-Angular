import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollsComponent } from './components/polls/polls.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateNewPollComponent } from './components/create-new-poll/create-new-poll.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
