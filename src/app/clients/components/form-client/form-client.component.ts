import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from 'src/app/core/models/client';
import { NumericValidator } from 'src/app/shared/validators/numeric-validator';
import { StateClient } from '../../enums/state-client.enum';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {


  public form:FormGroup;
  @Input() public client: Client=new Client();
  @Output() submitted:EventEmitter<Client>=new EventEmitter();
  public states=Object.values(StateClient);
  constructor(private formB: FormBuilder) { }
  onSubmit():void {
        this.submitted.emit(this.form.value);
  }
  ngOnInit(): void {
    let o=this.client;
    this.form= this.formB.group({
      ca: [o.ca ,NumericValidator],
      comment: [o.comment],
      tva:[o.tva],
      state:[o.state],
      name:[o.name],
      id:[o.id]
    });
  }


}
