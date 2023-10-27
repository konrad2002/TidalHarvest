import {Component} from '@angular/core';
import {UiService} from "./core/service/ui.service";
import {FieldType} from "./core/model/field/FieldType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tidal-harvest';

  constructor(
      private service: UiService
  ) {
  }

  addFarmer() {
      this.service.place(FieldType.FARMER, 4, 5);
  }
}
