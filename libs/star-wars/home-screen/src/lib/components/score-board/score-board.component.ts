import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GameMode } from '../../enums/game-mode.enum';
import { Side } from '../../enums/side.enum';

@Component({
  selector: 'sw-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreBoardComponent {
  @Input()
  score: Map<Side, number>;

  @Input()
  gameMode: GameMode;

  @Input()
  winner: string;

  readonly gameModeOption = GameMode;
  readonly side = Side;
}
