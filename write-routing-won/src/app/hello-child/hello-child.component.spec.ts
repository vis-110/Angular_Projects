import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloChildComponent } from './hello-child.component';

describe('HelloChildComponent', () => {
  let component: HelloChildComponent;
  let fixture: ComponentFixture<HelloChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
