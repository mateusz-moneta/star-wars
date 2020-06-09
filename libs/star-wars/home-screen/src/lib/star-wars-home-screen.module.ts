import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenComponent } from './containers/home-screen/home-screen.component';
import { StarWarsHomeScreenRoutingModule } from './star-wars-home-screen-routing.module';
import { StarWarsApiService } from './services/star-wars-api.service';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { StarWarsSharedModule } from '@sw/star-wars/shared';
import { ItemSelectComponent } from './components/item-select/item-select.component';
import { IndexPipe } from './pipes/index.pipe';
import { ScoreBoardComponent } from './components/score-board/score-board.component';

@NgModule({
  declarations: [HomeScreenComponent, CardDetailsComponent, ItemSelectComponent, IndexPipe, ScoreBoardComponent],
  imports: [CommonModule, StarWarsHomeScreenRoutingModule, StarWarsSharedModule],
  providers: [StarWarsApiService]
})
export class StarWarsHomeScreenModule {}
