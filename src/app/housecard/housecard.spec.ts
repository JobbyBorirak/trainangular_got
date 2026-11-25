import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Housecard } from './housecard';

describe('Housecard', () => {
  let component: Housecard;
  let fixture: ComponentFixture<Housecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Housecard],
    }).compileComponents();

    fixture = TestBed.createComponent(Housecard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
