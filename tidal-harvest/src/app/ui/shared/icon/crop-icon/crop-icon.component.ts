import {Component, Input} from '@angular/core';

@Component({
  selector: 'th-crop-icon',
  templateUrl: './crop-icon.component.html',
  styleUrls: ['./crop-icon.component.scss']
})
export class CropIconComponent {
  @Input() crop: string = "Weizen";
}
