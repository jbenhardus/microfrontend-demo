import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedShellComponent } from './red-shell.component';

describe('RedShellComponent', () => {
  let component: RedShellComponent;
  let fixture: ComponentFixture<RedShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
