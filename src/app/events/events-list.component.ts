import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";

@Component(
  {
    selector: 'events-list',
    template: `
      <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
          <event-thumbnail *ngFor="let event of events"
                           [event]="event"
                           class="col-md-5"></event-thumbnail>
        </div>
      </div>
    `
  }
)
export class EventsListComponent implements OnInit{

  events:any[];

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
