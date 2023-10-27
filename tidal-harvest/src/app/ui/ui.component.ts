import { Component } from '@angular/core';
import {UiService} from "../core/service/ui.service";
import {Matrix} from "../core/model/Matrix";

@Component({
  selector: 'th-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {

  matrix?: Matrix;

  constructor(
    private service: UiService
  ) {
    this.service.getMatrix().subscribe(data => {
        this.matrix = data;
    });
  }
}
