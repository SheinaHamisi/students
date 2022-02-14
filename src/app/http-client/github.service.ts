import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  user:User;
  // repository: Repository;
  
  constructor(private http:HttpClient) { 
    this.user = new User("", "", "", 0, "", "");
  }

  getUser(name:string){
    interface ApiResponse{
      name:string;
      login:string;
      location: string;
      public_repos: number;
      avatar_url: string;
      html_url: string;
    }


    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.url).subscribe(data => {
        this.user.name = data.name;
        this.user.login = data.login;
        this.user.location = data.location;
        this.user.repo = data.public_repos;
        this.user.avatar_url = data.avatar_url;
        this.user.html_url = data.html_url;

        resolve()

      },error => {
        this.user.name = "Sheina";
        this.user.login = "Hamisi";
        this.user.location = "Disney";
        this.user.repo = 2;
        this.user.avatar_url = "./assets/Avatar.png";
      reject(error);
      })
    })
    return promise;
}}
