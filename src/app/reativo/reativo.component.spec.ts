import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativoComponent } from './reativo.component';

describe('ReativoComponent', () => {
  let component: ReativoComponent;
  let fixture: ComponentFixture<ReativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
