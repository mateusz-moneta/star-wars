import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Category } from '../../enums/category.enum';
import { GameMode } from '../../enums/game-mode.enum';
import { SelectedItem } from '../../interfaces/selected-item.interface';
import { Side } from '../../enums/side.enum';
import { People } from '../../interfaces/people.interface';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'sw-home-screen',
  templateUrl: './home-screen.component.html'
})
export class HomeScreenComponent implements OnInit, OnDestroy {
  categories = Object.values(Category);
  data = new Map<Side, People | Vehicle>();
  gameModeOptions = Object.values(GameMode);
  homeScreenForm = new FormGroup({
    category: new FormControl(Category.PEOPLE),
    gameMode: new FormControl(GameMode.SINGLE_PLAYER)
  });
  score = new Map<Side, number>();
  selectedCategory = Category.PEOPLE;
  selectedGameMode = GameMode.SINGLE_PLAYER;
  winner: Side;

  private unsubscribe$ = new Subject<void>();
  readonly side = Side;

  ngOnInit(): void {
    this.handleChangeCategory();
    this.handleChangeGameMode();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSelectItem(selectedItem: SelectedItem): void {
    this.data.set(selectedItem.side, selectedItem.item);

    if (this.data.size === Object.keys(Side).length) {
      this.setWinner();

      if (this.selectedGameMode === GameMode.MULTI_PLAYER) {
        this.data.clear();
      }
    }
  }

  private setWinner(): void {
    switch (this.selectedCategory) {
      case Category.PEOPLE:
        this.winner = parseInt((this.data.get(Side.LEFT) as People).mass, 10)
         > parseInt((this.data.get(Side.RIGHT) as People).mass, 10) ? Side.LEFT : Side.RIGHT;
        break;

      case Category.VEHICLES:
        this.winner = parseInt((this.data.get(Side.LEFT) as Vehicle).crew, 10)
          > parseInt((this.data.get(Side.RIGHT) as Vehicle).crew, 10) ? Side.LEFT : Side.RIGHT;
        break;
    }

    if (this.selectedGameMode === GameMode.MULTI_PLAYER) {
      this.score.set(this.winner, this.score.get(this.winner) + 1);
    }
  }

  private handleChangeCategory(): void {
    this.homeScreenForm.controls.category.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((category: Category) => {
        this.selectedCategory = category;
        this.data.clear();
      });
  }

  private handleChangeGameMode(): void {
    this.homeScreenForm.controls.gameMode.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((gameMode: GameMode) => {
        this.data.clear();
        this.selectedGameMode = gameMode;
        this.winner = null;

        if (this.selectedGameMode === GameMode.MULTI_PLAYER) {
          Object.values(Side).forEach((side: Side) => {
            this.score.set(side, 0);
          });
        }
      });
  }
}
