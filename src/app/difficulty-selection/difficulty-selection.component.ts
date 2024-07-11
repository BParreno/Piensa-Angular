import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [],
  templateUrl: './difficulty-selection.component.html',
  styleUrls: ['./difficulty-selection.component.css']
})
export class DifficultySelectionComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/main']);
  }

  selectEasy() {
    this.router.navigate(['/level1']);
  }
}
