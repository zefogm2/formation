import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastersService {

  constructor(private toastr:ToastrService) {

  }
  public success(msg:string,title?:string,options?:any) {
    this.toastr.success(this.formatMessage(msg),title,options);
  }
  public error(msg:string,title?:string,options?:any) {
    this.toastr.error(this.formatMessage(msg),title,options);
  }
  public warning(msg:string,title?:string,options?:any) {
    this.toastr.warning(this.formatMessage(msg),title,options);
  }
  public info(msg:string,title?:string,options?:any) {
    this.toastr.info(this.formatMessage(msg),title,options);
  }

  private  formatMessage(msg) {
    return `${new Date().toLocaleDateString()}: ${msg}`;
  }
}
