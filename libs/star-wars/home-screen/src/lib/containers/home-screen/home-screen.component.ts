import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GameMode } from '../../enums/game-mode.enum';
import { StarWarsApiService } from '../../services/star-wars-api.service';
import { EndpointForCategory } from '../../interfaces/endpoint-for-category.interface';
import { share, subscribeOn, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ItemsForCategory } from '../../interfaces/items-for-category.interface';

@Component({
  selector: 'sw-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit, OnDestroy {
  category = new FormControl(null);
  gameMode = new FormControl(GameMode.SINGLE_PLAYER);
  gameModeOptions = Object.values(GameMode);
  endpointsForCategories$: Observable<EndpointForCategory[]>;
  itemsForCategory$: Observable<ItemsForCategory>;

  private unsubscribe$ = new Subject<void>();

  constructor(private starWarsApiService: StarWarsApiService) { }

  ngOnInit(): void {
    this.endpointsForCategories$ = this.starWarsApiService.loadEndpointsForCategories();
    this._handleChangesOfCategory();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private _handleChangesOfCategory(): void {
    this.category.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((endpoint: string) => {
        this.itemsForCategory$ = this.starWarsApiService.loadCategory(endpoint).pipe(share());
      });
  }
}
