import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public accountService: AccountsService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(): void{
    this.accountService.login(this.model).subscribe((response: any) => {
      this.router.navigateByUrl('/members');
      this.model = {};
    });
  }

  logout(): void{
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
