import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public item$:Observable<Client>;
  public title:string;
  public subtitle:string;

  constructor(private router:Router,
    private currentRoute:ActivatedRoute,private clientService:ClientsService) { }

  ngOnInit(): void {
    this.currentRoute.data.subscribe(
      (data)=>{
        this.title=data.title;
        this.subtitle=data.subtitle;
      }
    )
    this.item$=this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap)=>{
          return this.clientService.getItemById(params.get("id"));
      }
      )
    )

  }

  public update(item:Client) {
    this.clientService.updateItem(item).subscribe((result) => {
        this.router.navigate(["/clients"]);
    });
  }


}
