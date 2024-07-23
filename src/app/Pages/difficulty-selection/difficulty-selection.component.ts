import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponent } from '../../Components/back/back.component';

@Component({
  selector: 'app-difficulty-selection', // Selector para el componente
  standalone: true, // Indica que el componente es independiente
  imports: [BackComponent], // Importa el componente BackComponent
  templateUrl: './difficulty-selection.component.html', // Ruta del archivo HTML del template
  styleUrls: ['./difficulty-selection.component.css'] // Ruta del archivo CSS del estilo
})
export class DifficultySelectionComponent {
  constructor(private router: Router) {} // Inyección del servicio Router para la navegación

  // Método para seleccionar la dificultad fácil
  selectEasy() {
    this.router.navigate(['/level1']); // Navegar a la ruta '/level1'
  }

  // Método para seleccionar la dificultad media
  selectMedium() {
    alert('Medio no está implementado aún.'); // Mostrar alerta indicando que no está implementado
  }

  // Método para seleccionar la dificultad difícil
  selectHard() {
    alert('Difícil no está implementado aún.'); // Mostrar alerta indicando que no está implementado
  }
}
