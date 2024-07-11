import { Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DifficultySelectionComponent } from './difficulty-selection/difficulty-selection.component';
import { Level1Component } from './level1/level1.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainScreenComponent },
  { path: 'difficulty-selection', component: DifficultySelectionComponent },
  { path: 'level1', component: Level1Component },
];
