import {Component, Input} from '@angular/core';

@Component({
  selector: 'th-tile-background-img',
  templateUrl: './tile-background-img.component.html',
  styleUrls: ['./tile-background-img.component.scss']
})
export class TileBackgroundImgComponent {
    @Input() image!: string;
}
