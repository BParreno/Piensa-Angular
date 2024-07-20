import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Back2Component } from '../../Components/back2/back2.component';

@Component({
  selector: 'app-level1',
  standalone: true,
  imports: [CommonModule, Back2Component],
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component {
  lives = 2; // Vidas iniciales
  selectedAnswer: number | null = null; // Respuesta seleccionada
  disableButtons = false; // Estado de deshabilitación de los botones
  correctAnswer = 5; // Respuesta correcta
  heartImages = ['full-heart.png', 'full-heart.png']; // Array de imágenes de corazones
  buttonStates: { [key: number]: string } = {}; // Almacenar el estado de cada botón

  constructor(private router: Router) {}

  // Método para navegar a la pantalla principal
  goBack() {
    this.router.navigate(['/main']);
  }

  // Método para obtener la clase del botón según la respuesta
  getButtonClass(answer: number) {
    return this.buttonStates[answer] || '';
  }

  // Método para obtener la imagen del corazón según el índice
  getHeartImage(index: number) {
    return `assets/${this.heartImages[index]}`;
  }

  // Método para seleccionar una respuesta
  selectAnswer(answer: number) {
    if (this.disableButtons) return;

    if (answer === this.correctAnswer) {
      this.buttonStates[answer] = 'correct'; // Marcar el botón como correcto
      this.disableButtons = true; // Deshabilitar todos los botones
      setTimeout(() => {
        alert('Felicitaciones, ganaste!'); // Mostrar alerta de victoria
      }, 100);
    } else {
      this.buttonStates[answer] = 'incorrect'; // Marcar el botón como incorrecto
      this.lives--; // Reducir vidas
      this.heartImages[this.lives] = 'empty-heart.png'; // Actualizar imagen del corazón

      if (this.lives === 0) {
        this.disableButtons = true; // Deshabilitar todos los botones
        setTimeout(() => {
          alert('GAME OVER'); // Mostrar alerta de Game Over
        }, 100); // Retrasar la alerta para asegurar que la imagen del corazón se actualice
      }
    }
  }
}
