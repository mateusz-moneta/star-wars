import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';

import { Category } from '../../enums/category.enum';
import { ItemsForCategory } from '../../interfaces/items-for-category.interface';
import { People } from '../../interfaces/people.interface';
import { SelectedItem } from '../../interfaces/selected-item.interface';
import { Side } from '../../enums/side.enum';
import { StarWarsApiService } from '../../services/star-wars-api.service';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'sw-item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.scss']
})
export class ItemSelectComponent implements OnInit, OnDestroy {
  @Input()
  category: Category;

  @Input()
  items: People[] | Vehicle[] = [];

  @Input()
  side: Side;

  @Output()
  selectItem = new EventEmitter<SelectedItem>();

  control = new FormControl(null);
  items$: Observable<ItemsForCategory>;
  pageIndex = 1;

  private unsubscribe$ = new Subject<void>();

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.loadItems(this.pageIndex);
    this.handleControl();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  nextPage(): void {
    this.pageIndex++;
    this.loadItems(this.pageIndex);
  }

  previousPage(): void {
    this.pageIndex--;
    this.loadItems(this.pageIndex);
  }

  private handleControl(): void {
    this.control.valueChanges
      .pipe(
        filter(id => !!id),
        switchMap((id: number) => this.starWarsApiService.loadItemForCategory(this.category, id)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((item: People | Vehicle) => {
        this.selectItem.emit({ item, side: this.side });
      });
  }

  private loadItems(page: number): void {
    this.items$ = this.starWarsApiService.loadItemsForCategory(this.category, page);
  }
}
