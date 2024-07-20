import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoComponent } from '../../Components/logo/logo.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  constructor(private router: Router) {}

  loadGame() {
    alert('Cargar Juego no está implementado aún.');
  }

  startNewGame() {
    this.router.navigate(['/difficulty-selection']);
  }

  showKeyConcepts() {
    alert('Conceptos Clave no está implementado aún.');
  }

  showCredits() {
    alert('Créditos no está implementado aún.');
  }
}
