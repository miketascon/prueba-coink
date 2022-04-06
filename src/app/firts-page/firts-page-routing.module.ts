import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirtsPagePage } from './firts-page.page';

const routes: Routes = [
  {
    path: '',
    component: FirtsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirtsPagePageRoutingModule {}
