import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeScreenComponent } from './containers/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsHomeScreenRoutingModule {}
