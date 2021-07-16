import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPollComponent } from './create-new-poll.component';

describe('CreateNewPollComponent', () => {
  let component: CreateNewPollComponent;
  let fixture: ComponentFixture<CreateNewPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
