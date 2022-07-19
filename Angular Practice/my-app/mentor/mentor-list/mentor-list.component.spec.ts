import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorListComponent } from './mentor-list.component';

describe('MentorListComponent', () => {
  let component: MentorListComponent;
  let fixture: ComponentFixture<MentorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
