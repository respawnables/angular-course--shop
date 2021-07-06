import { Injectable } from '@angular/core';
import { Member } from '../login/member';



@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false

  login(user: Member): boolean {
    if (user.username == 'respawn' && user.password == '123456') {
      this.loggedIn = true
      localStorage.setItem('isLogged', user.username)
      return this.loggedIn
    }
    else {
      return false
    }
  }

  logout() {
    localStorage.removeItem('isLogged')
    this.loggedIn = false
  }

  isLoggedIn() {
    return this.loggedIn
  }
}
