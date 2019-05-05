import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "./authentication/authentication.service";
import {Router} from "@angular/router";
import {TOASTER_TOKEN, Toaster} from "../common/toaster.service";

@Component({
  templateUrl: './profile.component.html',
  styles: [
      `
      em {
        float: right;
        color: #E05C65;
        padding-left: 10px;
        padding-right: 3px;
      }

      .error input {
        background-color: #E3C3C5;
      }

      .error ::-webkit-input-placeholder {
        color: #999;
      }

      .error ::-moz-placeholder {
        color: #999;
      }

      .error :-moz-placeholder {
        color: #999;
      }

      .error :-ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {

  private profileFormGroup: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router, @Inject(TOASTER_TOKEN) private toaster: Toaster) {
  }

  ngOnInit(): void {
    let firstName = new FormControl(this.authenticationService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName = new FormControl(this.authenticationService.currentUser.lastName, Validators.required);
    this.profileFormGroup = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  saveProfile(value: any) {
    if (this.profileFormGroup.valid) {
      this.authenticationService.updateCurrentUser(value.firstName, value.lastName);
      this.toaster.success("Profile Saved")
    }
  }

  validateLastName(): boolean {
    let name = this.profileFormGroup.controls.lastName;
    return name.valid || name.untouched;
  }

  validateFirstName() {
    let name = this.profileFormGroup.controls.firstName;
    return name.valid || name.untouched;
  }
}
