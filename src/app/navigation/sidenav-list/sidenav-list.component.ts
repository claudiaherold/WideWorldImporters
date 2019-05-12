import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AuthenticationService } from '@app/_services';
import { User, Role } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  currentUser: User;
  userFromApi: any;
  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private router: Router) {
                this.currentUser = this.authenticationService.currentUserValue;

              }

    ngOnInit() {
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
          this.userFromApi = user;
      });
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.Role === Role.Admin;
}
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
