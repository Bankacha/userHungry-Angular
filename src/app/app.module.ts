import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { PollsComponent } from './components/polls/polls.component';
import { PollsService } from './services/polls-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { CreateNewPollComponent } from './components/create-new-poll/create-new-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PollsComponent,
    LogInComponent,
    CreateNewPollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [PollsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
