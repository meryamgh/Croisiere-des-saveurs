import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRecipeComponent } from './country-recipe.component';

describe('CountryRecipeComponent', () => {
  let component: CountryRecipeComponent;
  let fixture: ComponentFixture<CountryRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryRecipeComponent]
    });
    fixture = TestBed.createComponent(CountryRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
