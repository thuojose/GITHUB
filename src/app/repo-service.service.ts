import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  token = "?access_token=d7053f4fe09fb160156588c45bd61cb49f8fe9bd"
  constructor(private http :HttpClient) { 
  }
  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}
