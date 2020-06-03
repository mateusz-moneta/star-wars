import { async, TestBed } from '@angular/core/testing';
import { StarWarsHomeScreenModule } from './star-wars-home-screen.module';

describe('StarWarsHomeScreenModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarWarsHomeScreenModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarWarsHomeScreenModule).toBeDefined();
  });
});
