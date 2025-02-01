import { TestBed } from '@angular/core/testing';

import { AddWorkoutService } from './add-workout.service';

describe('AddWorkoutService', () => {
  let service: AddWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
