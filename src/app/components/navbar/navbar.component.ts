import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AddWorkoutComponent } from '../add-workout/add-workout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersListComponent } from '../users-list/users-list.component';
import { ChartComponent } from '../chart/chart.component'; 

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatDialogModule, 
    AddWorkoutComponent,
    UsersListComponent,
    ChartComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedComponent: string = 'users';
  constructor(public dialog: MatDialog) {}

  openAddWorkoutModal(): void {
    this.dialog.open(AddWorkoutComponent, {
      width: '400px'
    });
  }

  showComponent(component: string): void {
    this.selectedComponent = component;
  }
}