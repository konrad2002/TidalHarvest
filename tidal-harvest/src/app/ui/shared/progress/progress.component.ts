import {Component, Input} from '@angular/core';

@Component({
  selector: 'th-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() values?: number[];
  @Input() barTitle!: string;
}
