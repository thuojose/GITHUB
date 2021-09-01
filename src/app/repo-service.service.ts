import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  token = "?access_token=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"
  constructor(private http :HttpClient) { 
  }
  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }
}
