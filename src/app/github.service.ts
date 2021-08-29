import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { GitUser } from './git-user';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = "?access_token=d7053f4fe09fb160156588c45bd61cb49f8fe9bd"


  constructor(private http :HttpClient) { }
}
