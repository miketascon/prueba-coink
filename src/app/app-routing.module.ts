import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'firts-page',
    loadChildren: () => import('./firts-page/firts-page.module').then( m => m.FirtsPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'code-confirmation/:phone',
    loadChildren: () => import('./code-confirmation/code-confirmation.module').then( m => m.CodeConfirmationPageModule)
  },
  {
    path: 'register-form/:phone',
    loadChildren: () => import('./register-form/register-form.module').then( m => m.RegisterFormPageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then( m => m.ContractPageModule)
  },
  {
    path: '',
    redirectTo: 'firts-page',
    pathMatch: 'full'
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
