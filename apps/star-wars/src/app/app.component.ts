import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disableClose = true;
  mobileQuery: MediaQueryList;
  opened = true;

  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    /* tslint:disable-next-line */
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.mobileQuery.addListener(query => {
      this._onMediaChange(query.matches);
    });

    this._onMediaChange(this.mobileQuery.matches);
  }

  private _onMediaChange(matches: boolean): void {
    if (matches) {
      this.opened = false;
      this.disableClose = false;
    } else {
      this.opened = true;
      this.disableClose = true;
    }
  }
}
