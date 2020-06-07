import { People } from './people.interface';
import { Side } from '../enums/side.enum';
import { Vehicle } from './vehicle.interface';

export interface SelectedItem {
  item: People | Vehicle;
  side: Side;
}
