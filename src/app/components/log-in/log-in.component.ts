import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.username)
  }

  login() {
    this.authService.authenticate(this.username, this.password)
    this.username = ''
    this.password = ''
    this.router.navigate(['/'])
  }

}
