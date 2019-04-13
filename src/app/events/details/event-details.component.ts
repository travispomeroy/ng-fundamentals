import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
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
      `
    ]
  }
)
export class EventDetailsComponent implements OnInit {

  private event: any;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let idParameter: number = this.activatedRoute.snapshot.params['id'];
    this.event = this.eventService.getEvent(+idParameter);
  }
}
