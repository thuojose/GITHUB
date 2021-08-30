import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GitUser } from './git-user';
import { SearchUserComponent } from './search-user/search-user.component';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = "?access_token=d7053f4fe09fb160156588c45bd61cb49f8fe9bd"

  constructor(private http :HttpClient) { 
  }

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

      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
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
