import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEgComponent } from './dialog-eg.component';

describe('DialogEgComponent', () => {
  let component: DialogEgComponent;
  let fixture: ComponentFixture<DialogEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
