import { Component, OnInit } from '@angular/core';
import { GithubService } from '../http-client/github.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']

})
export class BodyComponent implements OnInit {

  

  constructor(public userService: GithubService) { }

  submitQuery(userName:string){
    let user = userName;
   
  }

  ngOnInit(): void {
  }

}
