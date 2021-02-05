import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  loggedIn: boolean;

  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.AccountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.AccountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.AccountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error =>{
      console.log(error);
    })
  }

}
