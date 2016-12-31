import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'image-url',
  templateUrl: './image-url.component.html',
  styleUrls: ['./image-url.component.css']
})
export class ImageUrlComponent{
  @Input('groupImageUrl')
  public imageUrlForm: FormGroup;
}
