import {Component} from "@angular/core";
import {AuthenticationService} from "./authentication/authentication.service";
import {Router} from "@angular/router";

@Component(
  {
    templateUrl: './login.component.html',
    styles: [
        `
        em {
          float: right;
          color: #E05C65;
          padding-left: 10px;
          padding-right: 3px;
        }
      `
    ]
  }
)
export class LoginComponent {

  private userName: string;
  private password: string;
  private mouseoverLogin: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  public login(value: any) {
    this.authenticationService.loginUser(value.userName, value.password);
    this.router.navigate(['events']);
  }

  public cancel() {
    this.router.navigate(['events']);
  }
}
