import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[thFieldPopup]'
})
export class FieldPopupDirective {

    constructor(public viewContainerRef: ViewContainerRef) { }

}
