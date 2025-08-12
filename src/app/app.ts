import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation'; // Add this import

@Component({
  selector: 'app-root',
  standalone: true, // Add this
  imports: [RouterOutlet, NavigationComponent], // Add Navigation to imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-website');
}