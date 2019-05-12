import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { User, Role } from './_models';
@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    title = 'Wild World Importers';
    constructor(private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
}
