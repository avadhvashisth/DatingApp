import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.accountService.register(this.model).subscribe((response: any) => {
      console.log(response);
      this.cancel();
    }, (error: any) => {
      console.log(error);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

}
