import {Component, Input} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{eventFromThumbnailComponent.name}}</h2>
      <div>Date: {{eventFromThumbnailComponent.date}}</div>
      <div>Time: {{eventFromThumbnailComponent.time}}</div>
      <div>Price: \${{eventFromThumbnailComponent.price}}</div>
      <div>
        <span>Location: {{eventFromThumbnailComponent.location.address}}</span>
        <span class="pad-left">{{eventFromThumbnailComponent.location.city}}
          , {{eventFromThumbnailComponent.location.country}}</span>
      </div>
    </div>
  `,
  styles: [
      `
      .pad-left {
        margin-left: 10px;
      }

      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() eventFromThumbnailComponent: any
}
