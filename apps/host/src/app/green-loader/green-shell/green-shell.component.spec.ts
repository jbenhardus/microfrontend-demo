import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenShellComponent } from './green-shell.component';

describe('GreenShellComponent', () => {
  let component: GreenShellComponent;
  let fixture: ComponentFixture<GreenShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreenShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
