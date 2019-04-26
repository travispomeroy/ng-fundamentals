import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {EventSession} from "../shared";

@Component(
  {
    selector: "session-list",
    templateUrl: "./session-list.component.html"
  }
)
export class SessionListComponent implements OnChanges{

  @Input()
  sessions:EventSession[];

  @Input()
  filterBy:string;

  @Input()
  sortBy:string;

  visibleSessions:EventSession[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  private filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(value => value.level.toLowerCase() === filterBy);
    }
  }

  private sortByVotesDesc(s1: EventSession, s2: EventSession): number {
    return s2.voters.length - s1.voters.length;
  }

  private sortByNameAsc(s1: EventSession, s2: EventSession): number {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name < s2.name) {
      return -1;
    } else {
      return 0;
    }
  }
}
