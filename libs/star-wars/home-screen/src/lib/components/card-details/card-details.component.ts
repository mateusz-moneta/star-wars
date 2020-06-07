import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Vehicle } from '../../interfaces/vehicle.interface';
import { People } from '../../interfaces/people.interface';

@Component({
  selector: 'sw-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailsComponent implements OnInit {
  @Input()
  item: People | Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

}
