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
        <span>&nbsp;</span>
        <span>{{eventFromThumbnailComponent.location.city}}
          , {{eventFromThumbnailComponent.location.country}}</span>
      </div>
    </div>
  `
})
export class EventThumbnailComponent  {
  @Input() eventFromThumbnailComponent:any
}
