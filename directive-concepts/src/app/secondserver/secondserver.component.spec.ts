import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondserverComponent } from './secondserver.component';

describe('SecondserverComponent', () => {
  let component: SecondserverComponent;
  let fixture: ComponentFixture<SecondserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
