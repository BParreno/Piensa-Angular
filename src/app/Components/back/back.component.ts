import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  standalone: true,
  imports: [],
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/main']);
  }
}
