import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función para inicializar la aplicación Angular
import { appConfig } from './app/app.config'; // Importa la configuración de la aplicación
import { AppComponent } from './app/app.component'; // Importa el componente raíz de la aplicación

// Inicializa la aplicación Angular con el componente raíz y la configuración especificada
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Captura y muestra cualquier error que ocurra durante la inicialización
