import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {EventService} from "../shared/event.service";
import {Observable} from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404'])
    }

    return eventExists;
  }
}



