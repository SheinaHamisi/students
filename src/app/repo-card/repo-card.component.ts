import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../http-client/github.service';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {

  repo: Repository;

  constructor(private service: GithubService) { }

  ngOnInit(): void {
  }

}
