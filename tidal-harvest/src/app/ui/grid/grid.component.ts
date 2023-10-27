import {Component, Input} from '@angular/core';
import {Matrix} from "../../core/model/Matrix";

@Component({
  selector: 'th-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    @Input() matrix!: Matrix
}
