import { Component } from '@angular/core'; // Importar la clase Component de Angular Core
import { Router } from '@angular/router'; // Importar la clase Router de Angular Router
import { CommonModule } from '@angular/common'; // Importar el módulo CommonModule de Angular Common

@Component({
  selector: 'app-back2', // Define el selector del componente, utilizado en las plantillas HTML
  standalone: true, // Indica que este componente es autónomo
  imports: [CommonModule], // Importa CommonModule para que se puedan utilizar directivas comunes de Angular en la plantilla
  templateUrl: './back2.component.html', // Especifica la ubicación del archivo de la plantilla HTML
  styleUrls: ['./back2.component.css'] // Especifica la ubicación del archivo de estilos CSS
})
export class Back2Component { // Define la clase del componente
  constructor(private router: Router) {} // Inyecta el servicio de enrutador en el constructor

  // Método para navegar a la pantalla principal
  goBack() {
    this.router.navigate(['/main']); // Navega a la ruta '/main'
  }
}
