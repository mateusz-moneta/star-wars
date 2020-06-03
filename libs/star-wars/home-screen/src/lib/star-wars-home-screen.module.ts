import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenComponent } from './containers/home-screen/home-screen.component';
import { StarWarsHomeScreenRoutingModule } from './star-wars-home-screen-routing.module';
import { StarWarsApiService } from './services/star-wars-api.service';
import { CardDetailsComponent } from './components/card-details/card-details.component';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { StarWarsSharedModule } from '@sw/star-wars/shared';

@NgModule({
  declarations: [HomeScreenComponent, CardDetailsComponent],
  imports: [CommonModule, StarWarsHomeScreenRoutingModule, StarWarsSharedModule],
  providers: [StarWarsApiService]
})
export class StarWarsHomeScreenModule {}
