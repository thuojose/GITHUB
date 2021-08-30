import { Component, OnInit } from '@angular/core';
import { GitUser } from '../git-user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user:GitUser[];
  particleJS:any;

  constructor(private service: GithubService) {
  }

  getSearchedUser(searchTerm) {
    this.service.searchMyUSer(searchTerm).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('rmogusu');
    let particlesJS;
  particlesJS.load('particles-js', 'particles.json', null);
  }

}

