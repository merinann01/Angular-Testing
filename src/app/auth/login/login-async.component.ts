import { AuthAsyncService } from './../auth-async.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-auth',
    template: `
  <a>
    <span *ngIf="needsLogin">Login</span>
    <span *ngIf="!needsLogin">Logout</span>
  </a>
`
})
export class LoginAsyncComponent implements OnInit {

    needsLogin: boolean = true;

    constructor(private authAsync: AuthAsyncService) {
    }

    ngOnInit() {
        this.authAsync.isAuthenticated().then((authenticated) => {
            this.needsLogin = !authenticated;
        })
    }
}