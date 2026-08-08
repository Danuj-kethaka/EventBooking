import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values = [
    { icon: '✦', title: 'Discovery', text: 'Make great experiences easier to find.' },
    { icon: '✓', title: 'Trust', text: 'Simple booking, clear information and secure journeys.' },
    { icon: '⌁', title: 'Connection', text: 'Bring people together through memorable real-world moments.' }
  ];
}
