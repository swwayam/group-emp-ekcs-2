import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmpComponent } from './rmp.component';

describe('RmpComponent', () => {
  let component: RmpComponent;
  let fixture: ComponentFixture<RmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
