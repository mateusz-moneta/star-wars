import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Category } from '../../enums/category.enum';
import { GameMode } from '../../enums/game-mode.enum';
import { Side } from '../../enums/side.enum';
import { SelectedItem } from '../../interfaces/selected-item.interface';

@Component({
  selector: 'sw-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit, OnDestroy {
  categories = Object.values(Category);
  gameModeOptions = Object.values(GameMode);
  homeScreenForm = new FormGroup({
    category: new FormControl(Category.PEOPLE),
    gameMode: new FormControl(GameMode.SINGLE_PLAYER)
  });
  selectedCategory = Category.PEOPLE;
  data = new Map();

  private unsubscribe$ = new Subject<void>();
  readonly side = Side;

  constructor() {}

  ngOnInit(): void {
    this.handleChangeCategory();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSelectItem(selectedItem: SelectedItem): void {
    this.data.set(selectedItem.side, selectedItem.item);
  }

  private handleChangeCategory(): void {
    this.homeScreenForm.controls.category.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((category: Category) => (this.selectedCategory = category));
  }
}
