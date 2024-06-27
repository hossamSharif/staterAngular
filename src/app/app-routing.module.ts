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
    path: 'print-modal',
    loadChildren: () => import('./print-modal/print-modal.module').then( m => m.PrintModalPageModule)
  },
  {
    path: 'folder/pos-sales',
    loadChildren: () => import('./pos-sales/pos-sales.module').then( m => m.PosSalesPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
