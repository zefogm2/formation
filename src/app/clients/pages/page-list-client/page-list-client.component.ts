import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { StateClient } from '../../enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {
  navigationSubscription;
  public clientList: Client[];
  public states=Object.values(StateClient);
  constructor(private clientService: ClientsService,private route: ActivatedRoute) { }
  public tableHeaders;
  public nameSelected:string = null;
  ngOnInit(): void {

    console.log("init client");
    this.tableHeaders=["Nom","commentaire","ca","etat"];
    this.route.params.subscribe(params => {
      this.nameSelected = params['id'];
   });



    this.clientService.collection.subscribe(
        (datas) => {
             this.clientList=datas;

        },(err) =>{
          console.log("Erreur");

          console.log(err);
        }
    );
  }

  public changeState(item:Client,event):void {
    this.clientService.changeState(item,event.target.value).subscribe(result=>{
       item.state=result.state;
    },err=>{
        event.target.value=item.state;
    });
  }


}
