import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Category } from '../../enums/category.enum';
import { People } from '../../interfaces/people.interface';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'sw-card-details',
  templateUrl: './card-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailsComponent {
  @Input()
  category: Category;

  @Input()
  item: People | Vehicle;

  readonly categoryOption = Category;
}
