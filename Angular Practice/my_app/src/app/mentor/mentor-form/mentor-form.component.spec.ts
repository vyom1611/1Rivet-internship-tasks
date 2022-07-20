import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFormComponent } from './mentor-form.component';

describe('MentorFormComponent', () => {
  let component: MentorFormComponent;
  let fixture: ComponentFixture<MentorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
