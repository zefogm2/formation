import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';

@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit , OnDestroy{
  @Input('invalidType') type:string;

  constructor(
    private invalidMessage:InvalidMessageDirective,
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }

  ngOnInit() {
    this.invalidMessage.controlValue$.subscribe(
      ()=> {
        this.setVisible();
      }
    )
  }
  ngOnDestroy() {
    //this.invalidMessage.controlValue$.
  }
  private setVisible() {
      if (this.invalidMessage.match(this.type)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
          this.viewContainer.clear();
      }
  }

}
