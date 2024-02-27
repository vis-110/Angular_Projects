import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeShoppingEditComponent } from './before-shopping-edit.component';

describe('BeforeShoppingEditComponent', () => {
  let component: BeforeShoppingEditComponent;
  let fixture: ComponentFixture<BeforeShoppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeShoppingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeShoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
