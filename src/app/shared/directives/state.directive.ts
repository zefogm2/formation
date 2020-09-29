import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{
  @Input() state:string;
  @HostBinding("class") className:string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.className=this.formatClass(this.state);
    console.log("Chgt state : "+this.className);
  }
  private formatClass(state:string):string {

    return `state-${state.trim().toLowerCase().replace(" ","-")}`;

  }

}
