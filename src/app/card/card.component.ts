import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../http-client/github.service';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  user:User;
  repo:Repository;


  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.user = this.githubService.user;
  }

}
