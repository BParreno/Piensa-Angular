import { Component } from '@angular/core'; // Importa el decorador Component de Angular core
import { Router } from '@angular/router'; // Importa el servicio Router para la navegación
import { LogoComponent } from '../../Components/logo/logo.component'; // Importa el componente LogoComponent

@Component({
  selector: 'app-main-screen', // Define el selector del componente, utilizado en HTML para insertar este componente
  standalone: true, // Indica que este es un componente independiente que no requiere un módulo Angular
  imports: [LogoComponent], // Importa el componente LogoComponent para su uso en este componente
  templateUrl: './main-screen.component.html', // Define la plantilla HTML para este componente
  styleUrls: ['./main-screen.component.css'] // Define la hoja de estilos CSS para este componente
})
export class MainScreenComponent {
  constructor(private router: Router) {} // Inyecta el servicio Router en el componente

  loadGame() {
    alert('Cargar Juego no está implementado aún.'); // Muestra una alerta indicando que la función no está implementada
  }

  startNewGame() {
    this.router.navigate(['/difficulty-selection']); // Navega a la ruta de selección de dificultad
  }

  showKeyConcepts() {
    alert('Conceptos Clave no está implementado aún.'); // Muestra una alerta indicando que la función no está implementada
  }

  showCredits() {
    alert('Créditos no está implementado aún.'); // Muestra una alerta indicando que la función no está implementada
  }
}
