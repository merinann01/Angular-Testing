import { Component } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login2',
  template: `
  <a>
    <span *ngIf="needsLogin()">Login</span>
    <span *ngIf="!needsLogin()">Logout</span>
  </a>
`
})
export class Login2Component {

  constructor(private auth: AuthService) {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}