import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CanLoadGuard } from './can-load.guard';
import { CandeactivateGuard } from './candeactivate.guard';
import { ChildGuard } from './child.guard';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { DeleteVendorComponent } from './delete-vendor/delete-vendor.component';
import { EditComponent } from './edit/edit.component';
import { FilterDemoComponent } from './filter-demo/filter-demo.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { ProductordersComponent } from './productorders/productorders.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { SalesComponent } from './sales/sales.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:"VendorList",component:VendorListComponent},
{path:"create",component:CreateVendorComponent,canActivate:[AuthGuard],canDeactivate:[CandeactivateGuard]},
{path:"update/:vendorId",component:UpdateVendorComponent},
{path:"delete/:vendorId",component:DeleteVendorComponent},
{path:"FilterPipe",component:FilterPipeComponent},
{path:"FilterDemo",component:FilterDemoComponent},
{path:"reactive",component:ReactivefrmComponent},


{path:"details/:vendorId",component:VendorDetailsComponent},
{path:"unauthorised",component:UnauthorisedComponent},

{path:"product",children:
[
  {path:"view",component:ViewComponent},
  {path:"edit",component:EditComponent}
],
component:ProductComponent,canActivateChild:[ChildGuard]},

{path:"Sales",children:
[
  {path:"Orders",component:OrdersComponent,outlet:"ordersRoute"},
  {path:"Vendors",component:VendorsComponent,outlet:"vendorsRoute"},
 ],
component:SalesComponent,canActivateChild:[ChildGuard]},



{path:"order",
children:[{path:"productorder",component:ProductordersComponent}],
component:OrderComponent},
{path:"home",component:HomeComponent},



{path:"",redirectTo:"VendorList",pathMatch:'full'},
{ 
  path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canLoad:[CanLoadGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
