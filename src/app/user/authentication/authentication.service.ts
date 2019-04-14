import {Injectable} from "@angular/core";
import {UserModel} from "../user.model";

@Injectable()
export class AuthenticationService {

  currentUser: UserModel;

  public loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'FlatPenguino',
      firstName: 'Travis',
      lastName: 'Pomeroy'
    };
  }

  public isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
