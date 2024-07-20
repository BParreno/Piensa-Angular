import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponent } from '../../Components/back/back.component';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [BackComponent],
  templateUrl: './difficulty-selection.component.html',
  styleUrls: ['./difficulty-selection.component.css']
})
export class DifficultySelectionComponent {
  constructor(private router: Router) {}

  selectEasy() {
    this.router.navigate(['/level1']);
  }

  selectMedium() {
    alert('Medio no está implementado aún.');
  }

  selectHard() {
    alert('Difícil no está implementado aún.');
  }
}
