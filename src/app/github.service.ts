import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GitUser } from './git-user';
import { SearchUserComponent } from './search-user/search-user.component';
import { environment } from 'src/environments/environment';
import {Observable}  from'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:GitUser[] = [];

  constructor(private http :HttpClient) { 
  }
  _URL = 'https://api.github.com/users/';
  private clientId = environment.clientId
  private clientSecret = environment.clientSecret

  searchMyUSer(searchTerm:string) {

    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
      location:string;
      company:string;
      bio:string;
      searchTerms:string;

    } 
    return new Promise<void>((resolve, reject) => {
      this.user = [];

      this.http.get<data>(`https://api.github.com/users/${searchTerm}?${this.clientId}&client_secret=${this.clientSecret}`).toPromise().then(
        (results) => {
          
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
}
