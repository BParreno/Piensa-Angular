import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Define el selector del componente, utilizado en HTML para insertar este componente
  standalone: true, // Indica que este es un componente independiente que no requiere un módulo Angular
  imports: [RouterOutlet], // Importa RouterOutlet, necesario para la navegación entre rutas
  templateUrl: './app.component.html', // Define la plantilla HTML para este componente
  styleUrls: ['./app.component.css'] // Define la hoja de estilos CSS para este componente
})
export class AppComponent {
  title = 'Piensa-Angular'; // Define una propiedad del componente
}
