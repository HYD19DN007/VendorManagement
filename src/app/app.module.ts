import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorServiceService } from './vendor-service.service';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { ProductComponent } from './product/product.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ProductordersComponent } from './productorders/productorders.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { VendorsComponent } from './vendors/vendors.component';
import { AuthGuard } from './auth.guard';
import { ChildGuard } from './child.guard';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { CandeactivateGuard } from './candeactivate.guard';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { ShortenPipe } from './pipes/ShortenPipe';
import { FilterDemoComponent } from './filter-demo/filter-demo.component';
import { FilterPerson } from './pipes/FilterPerson';
import { AgePipe } from './pipes/AgePipe';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    CreateVendorComponent,
    VendorDetailsComponent,
    VendorListComponent,
    UpdateVendorComponent,
    DeleteVendorComponent,
    ProductComponent,
    ViewComponent,
    EditComponent,
    OrderComponent,
    HomeComponent,
    ProductordersComponent,
    SalesComponent,
    OrdersComponent,
    VendorsComponent,
    UnauthorisedComponent,
    FilterPipeComponent,
    ShortenPipe,
    FilterDemoComponent,
    FilterPerson,
    AgePipe,
    ReactivefrmComponent
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [VendorServiceService,AuthService,AuthGuard,ChildGuard,CandeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
