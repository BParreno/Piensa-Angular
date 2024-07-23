import { Component } from '@angular/core'; // Importa la clase Component de Angular core
import { Router } from '@angular/router'; // Importa el servicio Router de Angular para la navegación
import { CommonModule } from '@angular/common'; // Importa CommonModule para el uso de directivas comunes de Angular
import { Back2Component } from '../../Components/back2/back2.component'; // Importa el componente Back2

@Component({
  selector: 'app-level1', // Define el selector para el componente
  standalone: true, // Indica que este componente es independiente (standalone)
  imports: [CommonModule, Back2Component], // Especifica los módulos y componentes que se importan
  templateUrl: './level1.component.html', // Ruta al archivo de plantilla HTML
  styleUrls: ['./level1.component.css'] // Ruta al archivo de estilos CSS
})
export class Level1Component {
  lives = 2; // Número inicial de vidas del jugador
  selectedAnswer: number | null = null; // Almacena la respuesta seleccionada por el jugador
  disableButtons = false; // Estado que indica si los botones están deshabilitados
  correctAnswer = 5; // La respuesta correcta para este nivel
  heartImages = ['full-heart.png', 'full-heart.png']; // Array de imágenes de corazones para mostrar las vidas
  buttonStates: { [key: number]: string } = {}; // Objeto que almacena el estado de cada botón (correcto o incorrecto)

  constructor(private router: Router) {} // Constructor del componente, inyecta el servicio Router

  // Método para navegar a la pantalla principal
  goBack() {
    this.router.navigate(['/main']); // Navega a la ruta '/main'
  }

  // Método para obtener la clase CSS del botón según la respuesta
  getButtonClass(answer: number) {
    return this.buttonStates[answer] || ''; // Devuelve la clase CSS correspondiente o una cadena vacía si no hay estado
  }

  // Método para obtener la imagen del corazón según el índice
  getHeartImage(index: number) {
    return `assets/${this.heartImages[index]}`; // Devuelve la ruta a la imagen del corazón
  }

  // Método para seleccionar una respuesta
  selectAnswer(answer: number) {
    if (this.disableButtons) return; // Si los botones están deshabilitados, no hace nada

    if (answer === this.correctAnswer) {
      this.buttonStates[answer] = 'correct'; // Marca el botón como correcto
      this.disableButtons = true; // Deshabilita todos los botones
      setTimeout(() => {
        alert('Felicitaciones, ganaste!'); // Muestra una alerta de victoria
      }, 100); // Retrasa la alerta para asegurar que la UI se actualice
    } else {
      this.buttonStates[answer] = 'incorrect'; // Marca el botón como incorrecto
      this.lives--; // Reduce el número de vidas
      this.heartImages[this.lives] = 'empty-heart.png'; // Actualiza la imagen del corazón

      if (this.lives === 0) {
        this.disableButtons = true; // Deshabilita todos los botones si se acaban las vidas
        setTimeout(() => {
          alert('GAME OVER'); // Muestra una alerta de Game Over
        }, 100); // Retrasa la alerta para asegurar que la imagen del corazón se actualice
      }
    }
  }
}
