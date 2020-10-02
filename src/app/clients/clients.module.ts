import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';



@NgModule({
  declarations: [PageListClientComponent, FormClientComponent, PageAddClientComponent, PageEditClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,TemplatesModule
,ReactiveFormsModule,IconsModule
  ]
})
export class ClientsModule { }
