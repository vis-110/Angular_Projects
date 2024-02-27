import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataDataComponent } from './updata-data.component';

describe('UpdataDataComponent', () => {
  let component: UpdataDataComponent;
  let fixture: ComponentFixture<UpdataDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdataDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdataDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
