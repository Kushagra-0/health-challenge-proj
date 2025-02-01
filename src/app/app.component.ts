import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { userData } from './data/app.data';
import { ChartComponent } from './components/chart/chart.component';

@Component({
selector: 'app-root',
standalone: true,
imports: [
  RouterOutlet,
  NavbarComponent,
  MatToolbarModule,
  MatTabsModule,
  CommonModule,
  MatIconModule,
  AddWorkoutComponent,
  UsersListComponent,
  ChartComponent,
],
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Health-Tracker';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.initializeLocalStorage();
  }

  initializeLocalStorage() {
    if (typeof window !== 'undefined' && localStorage) {
      if (!localStorage.getItem('workoutData')) {
        localStorage.setItem('workoutData', JSON.stringify(userData));
      }
    }
  }
}