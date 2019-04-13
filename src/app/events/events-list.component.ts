import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToasterService} from "../common/toaster.service";
import {ActivatedRoute, ActivationEnd, Route} from "@angular/router";
import {EventModel} from "./shared";

@Component(
  {
    template: `
      <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail [event]="event"
                             (click)="handleThumbnailClick(event.name)"></event-thumbnail>
          </div>
        </div>
      </div>
    `
  }
)
export class EventsListComponent implements OnInit {

  events: EventModel[];

  constructor(private eventService: EventService, private toaster: ToasterService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(nameOfEvent: any) {
    this.toaster.success(nameOfEvent);
  }
}
