import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDirectoryComponent } from './input-directory.component';

describe('InputDirectoryComponent', () => {
  let component: InputDirectoryComponent;
  let fixture: ComponentFixture<InputDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
