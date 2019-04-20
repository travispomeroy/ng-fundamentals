import {Component, Input} from "@angular/core";
import {EventSession} from "../shared";

@Component(
  {
    selector: "session-list",
    templateUrl: "./session-list.component.html"
  }
)
export class SessionListComponent {

  @Input()
  sessions:EventSession[];
}
