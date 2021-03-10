import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public accountService: AccountsService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.accountService.login(this.model).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.log(error);
    });
  }

  logout(): void{
    this.accountService.logout();
  }
}
