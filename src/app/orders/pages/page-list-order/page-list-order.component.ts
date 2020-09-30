import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from '../../enums/state-order.enum';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {
  public orderList: Order[];
  public tableHeaders:string[];
  public states=Object.values(StateOrder);
  constructor(private orderService:OrdersService) { }


  public changeState(item:Order,event):void {
    this.orderService.changeState(item,event.target.value).subscribe(result=>{
       item.state=result.state;
    },err=>{
        event.target.value=item.state;
    });
  }
  public testButton() {
    alert("Click sur le bouton");

  }
  ngOnInit(): void {

    this.tableHeaders= [
      "Type","Client","Nb. Jours","Tjm HT","Total HT","Total TTC","State"
    ];

    this.orderService.collection.subscribe(
        (datas) => {
          console.log(datas);
          if (this.tableHeaders == null) this.tableHeaders=Object.getOwnPropertyNames(datas[0]);
          this.orderList=datas;

        },(err) =>{
          console.log("Erreur orders");
          console.log(err);
        }
    );
  }

}
