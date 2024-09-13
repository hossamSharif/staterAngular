import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth/auth-gaurd.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder/sales-record',
    loadChildren: () => import('./sales-record/sales-record.module').then( m => m.SalesRecordPageModule)
  },
  {
    path: 'folder/edit-sales',
    loadChildren: () => import('./edit-sales/edit-sales.module').then( m => m.EditSalesPageModule)
  },
  {
    path: 'print-modal',
    loadChildren: () => import('./print-modal/print-modal.module').then( m => m.PrintModalPageModule)
  },
  {
    path: 'item-modal',
    loadChildren: () => import('./item-modal/item-modal.module').then( m => m.ItemModalPageModule)
  },
  {
    path: 'folder/pos-sales',
    loadChildren: () => import('./pos-sales/pos-sales.module').then( m => m.PosSalesPageModule)
  },{
    path: 'folder/items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'imgodal',
    loadChildren: () => import('./imgodal/imgodal.module').then( m => m.ImgodalPageModule)
  },
  {
    path: 'folder/discount',
    loadChildren: () => import('./discount/discount.module').then( m => m.DiscountPageModule)
  },
  {
    path: 'folder/discount-record',
    loadChildren: () => import('./discount-record/discount-record.module').then( m => m.DiscountRecordPageModule)
  },
  {
    path: 'folder/edit-discount',
    loadChildren: () => import('./edit-discount/edit-discount.module').then( m => m.EditDiscountPageModule)
  },
  {
    path: 'folder/cash3',
    loadChildren: () => import('./cash3/cash3.module').then( m => m.Cash3PageModule)
  },
  {
    path: 'folder/spend-record2',
    loadChildren: () => import('./spend-record2/spend-record2.module').then( m => m.SpendRecord2PageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
