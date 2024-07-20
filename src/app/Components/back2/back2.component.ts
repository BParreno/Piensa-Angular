import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back2.component.html',
  styleUrls: ['./back2.component.css']
})
export class Back2Component {
  constructor(private router: Router) {}

  // Método para navegar a la pantalla principal
  goBack() {
    this.router.navigate(['/main']);
  }
}
