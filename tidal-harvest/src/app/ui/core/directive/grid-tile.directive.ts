import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[thGridTile]'
})
export class GridTileDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
