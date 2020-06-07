import { People } from './people.interface';
import { Vehicle } from './vehicle.interface';

export interface ItemsForCategory {
  count: number;
  next: string;
  previous: string;
  results: People[] | Vehicle[];
}
