import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefrmComponent } from './reactivefrm.component';

describe('ReactivefrmComponent', () => {
  let component: ReactivefrmComponent;
  let fixture: ComponentFixture<ReactivefrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivefrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivefrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
