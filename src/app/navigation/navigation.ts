import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css']
})
export class NavigationComponent {

  isLoggedIn = false;
  showDropdown = false;
  mobileMenuOpen = false;

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 900) {
      this.mobileMenuOpen = false;
    }
  }
}