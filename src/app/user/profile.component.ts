import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "./authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  private profileFormGroup: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    let firstName = new FormControl(this.authenticationService.currentUser.firstName);
    let lastName = new FormControl(this.authenticationService.currentUser.lastName);
    this.profileFormGroup = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  saveProfile(value: any) {
    this.authenticationService.updateCurrentUser(value.firstName, value.lastName);
    this.router.navigate(['/events']);
  }
}
