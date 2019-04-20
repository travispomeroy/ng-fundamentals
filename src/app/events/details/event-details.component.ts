import {Component, OnInit} from "@angular/core";
import {EventModel, EventService, EventSession} from "../shared";
import {ActivatedRoute} from "@angular/router";

@Component(
  {
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container {
          padding-left: 20px;
          padding-right: 20px;
        }

        .event-image {
          height: 100px;
        }
        
        a {
          cursor: pointer;
        }
      `
    ]
  }
)
export class EventDetailsComponent implements OnInit {

  private event: EventModel;
  private addMode: boolean;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let idParameter: number = this.activatedRoute.snapshot.params['id'];
    this.event = this.eventService.getEvent(+idParameter);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: EventSession) {
    session.id = Math.max.apply(null, this.event.sessions.map(value => value.id));
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  private cancelAddSession() {
    this.addMode = false;
  }
}
