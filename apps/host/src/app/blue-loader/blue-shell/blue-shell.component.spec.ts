import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueShellComponent } from './blue-shell.component';

describe('BlueShellComponent', () => {
  let component: BlueShellComponent;
  let fixture: ComponentFixture<BlueShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlueShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlueShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
