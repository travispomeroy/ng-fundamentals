import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {EventService} from "./shared/event.service";
import {map} from "rxjs/operators";

@Injectable()
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.eventService.getEvents().pipe(map(value => value));
  }

}
