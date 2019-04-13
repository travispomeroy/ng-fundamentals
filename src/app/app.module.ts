import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from "./navigation/navbar.component";
import {EventService} from "./events/shared/event.service";
import {ToasterService} from "./common/toaster.service";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [
    EventService,
    ToasterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}
