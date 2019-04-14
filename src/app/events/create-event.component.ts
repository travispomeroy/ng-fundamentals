import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventModel, EventService} from "./shared";

@Component(
  {
    templateUrl: 'create-event.component.html',
    styles: [
        `
        em {
          float: right;
          color: #E05C65;
          padding-left: 10px;
          padding-right: 3px;
        }

        .error input {
          background-color: #E3C3C5;
        }

        .error ::-webkit-input-placeholder {
          color: #999;
        }

        .error ::-moz-placeholder {
          color: #999;
        }

        .error :-moz-placeholder {
          color: #999;
        }

        .error :-ms-input-placeholder {
          color: #999;
        }

        .event-image {
          padding-top: 10px;
          height: 100px;
        }
      `
    ]
  }
)
export class CreateEventComponent {

  isDirty: boolean = true;
  private newEvent: EventModel;

  constructor(private router: Router, private eventService: EventService) {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(value: EventModel) {
    this.eventService.saveEvent(value);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
