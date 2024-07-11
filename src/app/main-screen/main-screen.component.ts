import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [],
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {
  constructor(private router: Router) {}

  loadGame() {
    // Aquí puedes agregar la lógica para cargar el juego
    alert('Cargar Juego no está implementado aún.');
  }

  startNewGame() {
    this.router.navigate(['/difficulty-selection']);
  }

  showKeyConcepts() {
    // Aquí puedes agregar la lógica para mostrar los conceptos clave
    alert('Conceptos Clave no está implementado aún.');
  }

  showCredits() {
    // Aquí puedes agregar la lógica para mostrar los créditos
    alert('Créditos no está implementado aún.');
  }
}
