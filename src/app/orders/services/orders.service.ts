import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  //private pCollection: Observable<Order[]>;
  private pCollection: BehaviorSubject<Order[]>=new BehaviorSubject([]);
  private urlApi=environment.urlApi;
  public refresh$:Subject<boolean>=new Subject();

  constructor(private http: HttpClient) {
    console.log(`${this.urlApi}orders`);
    this.refresh$.subscribe(
      (refreshing) =>{
        this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
          map((col)=> {
            return col.map((item) => {
                return new Order(item);
            })
          })
          ).subscribe(
            (col)=> {
                this.pCollection.next(col);
            }
          )
      }
    );


  }
  get collection():Observable<Order[]> {
      return this.pCollection.asObservable();
  }

  public changeState(item:Order,state: StateOrder) {
    const obj = new Order({...item});
    obj.state=state;
    return this.updateItem(obj);
  }

  public updateItem(item: Order):Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`,item );
  }

  public addItem(item:Order):Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`,item );
  }

  public getItemById(id):Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }

  public deleteItem(id):Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${id}`);
  }


}
