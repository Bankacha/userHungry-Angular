import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/services/polls-service.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  polls: any[] = []

  constructor(private pollsService: PollsService) { }

  ngOnInit(): void {
    this.pollsService.getPolls().subscribe( (data:any) => {
      this.polls = data
      console.log(this.polls)
    } )
  }

}
