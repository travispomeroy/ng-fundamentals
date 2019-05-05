import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {EventsAppComponent} from './events-app.component';
import {NavBarComponent} from "./navigation/navbar.component";
import {Toaster, TOASTER_TOKEN} from "./common/toaster.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import {Error404Component} from "./errors/404.component";
import {AuthenticationService} from "./user/authentication/authentication.service";
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolverService,
  CreateSessionComponent,
  SessionListComponent, DurationPipe,
} from './events';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";

let toastr:Toaster = window['toastr'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    Error404Component
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolverService,
    AuthenticationService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTER_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("You have not saved this, do you really want to cancel?");
  }

  return true;
}
