import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from "./navigation/navbar.component";
import {EventService} from "./events/shared/event.service";
import {ToasterService} from "./common/toaster.service";
import {EventDetailsComponent} from "./events/details/event-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-route-activator.service";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToasterService,
    EventRouteActivator
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}
