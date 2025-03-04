import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions,
  MatTooltipModule,
} from '@angular/material/tooltip';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Workout, workoutOptions } from '../../models/app.model';
import { AddWorkoutService } from '../../services/add-workout/add-workout.service';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 200,
  hideDelay: 500,
  touchendHideDelay: 800,
};

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-workout.component.html',
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
  ],
  styleUrl: './add-workout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddWorkoutComponent {
  @Output() userAdded = new EventEmitter<void>();
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(
    private addWorkoutService: AddWorkoutService,
    public dialog: MatDialog
  ) {}

  name: string | null = null;
  workoutMinutes: number | null = null;
  workoutTypes: string | null = null;
  workoutOptions = workoutOptions;

  onSubmit(form: NgForm) {
    const success = this.addWorkoutService.addWorkout(
      this.name,
      this.workoutTypes,
      this.workoutMinutes
    );
    if (success) {
      form.resetForm();
      this.userAdded.emit();
      this.dialog.closeAll();  
      window.location.reload() 
    }
  }

  onCancel() {
    this.dialog.closeAll();
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.userAdded.emit();
      }
    });
  }
}

export type { Workout };
export { workoutOptions };