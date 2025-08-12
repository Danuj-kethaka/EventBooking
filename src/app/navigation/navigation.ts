import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',  // Keep as navigation.html
  styleUrls: ['./navigation.css']   // Keep as navigation.css
})
export class NavigationComponent {
  isLoggedIn = false;
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}