import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',


  template: `<a [hidden]="needsLogin()">Login</a>`,

})
export class LoginComponent {

  constructor(private auth: AuthService) { }



  needsLogin() {
    return !this.auth.isAuthenticated();
  }

}
