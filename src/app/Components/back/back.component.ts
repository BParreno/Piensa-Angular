import { Component } from '@angular/core'; // Importar la clase Component de Angular Core
import { Router } from '@angular/router'; // Importar la clase Router de Angular Router

@Component({
  selector: 'app-back', // Define el selector del componente, utilizado en las plantillas HTML
  standalone: true, // Indica que este componente es autónomo
  imports: [], // No hay otros componentes o módulos importados
  templateUrl: './back.component.html', // Especifica la ubicación del archivo de la plantilla HTML
  styleUrls: ['./back.component.css'] // Especifica la ubicación del archivo de estilos CSS
})
export class BackComponent { // Define la clase del componente
  constructor(private router: Router) {} // Inyecta el servicio de enrutador en el constructor

  goBack() {
    this.router.navigate(['/main']); // Método para navegar a la ruta '/main'
  }
}
