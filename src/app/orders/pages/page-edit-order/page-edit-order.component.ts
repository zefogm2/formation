import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public item$:Observable<Order>;
  public title:string;
  public subtitle:string;
  constructor(private router:Router,
    private currentRoute:ActivatedRoute,private orderService:OrdersService) { }

  ngOnInit(): void {
    this.currentRoute.data.subscribe(
      (data)=>{
        this.title=data.title;
        this.subtitle=data.subtitle;
      }
    )
    this.item$=this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap)=>{
          return this.orderService.getItemById(params.get("id"));
      }
      )
    )
  }

  public update(item:Order) {
    this.orderService.updateItem(item).subscribe((result) => {
        this.router.navigate(["/orders"]);
    });
  }

}
