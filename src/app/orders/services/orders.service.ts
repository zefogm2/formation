import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi=environment.urlApi;
  constructor(private http: HttpClient) {
    console.log(`${this.urlApi}orders`);
     this.collection=this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
       map((col)=> {
         return col.map((item) => {
             return new Order(item);
         })
       })
     );
  }
  get collection():Observable<Order[]> {
      return this.pCollection
  }
  set collection(col: Observable<Order[]>) {
    this.pCollection=col;
  }
  public changeState(item:Order,state: StateOrder) {
    const obj = new Order({...item});
    obj.state=state;
    return this.updateItem(obj);
  }

  public updateItem(item: Order):Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`,item );
  }

}
