import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDifficultyComponent } from './task-difficulty.component';

describe('TaskDifficultyComponent', () => {
  let component: TaskDifficultyComponent;
  let fixture: ComponentFixture<TaskDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDifficultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
