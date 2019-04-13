import {Routes} from "@angular/router";
import {EventsListComponent} from "./app/events/events-list.component";
import {EventDetailsComponent} from "./app/events/details/event-details.component";
import {CreateEventComponent} from "./app/events/create-event.component";
import {Error404Component} from "./app/errors/404.component";
import {EventRouteActivator} from "./app/events/event-route-activator.service";
import {EventsListResolverService} from "./app/events/shared/events-list-resolver.service";


export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      events: EventsListResolverService
    }
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
];
