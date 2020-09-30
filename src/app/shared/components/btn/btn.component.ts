import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() label: string;
  @Input() href: string;
  @Input() disabled:boolean=false;
  @Input() route: string;
  @Input() action:boolean;
  @Output() clicked: EventEmitter<any>=new EventEmitter();
  @Input() type:string = "button";
  constructor() { }

  ngOnInit(): void {
  }

  public doAction() {
    this.clicked.emit();
  }

}
