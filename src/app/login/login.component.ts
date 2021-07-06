import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from './member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  model: Member = new Member()

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model)
  }

}
