import {Routes} from "@angular/router";
import {Error404Component} from "./app/errors/404.component";
import {CreateSessionComponent, EventsListResolverService} from "./app/events";

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator
} from "./app/events"

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
    path: 'events/session/new',
    component: CreateSessionComponent
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
