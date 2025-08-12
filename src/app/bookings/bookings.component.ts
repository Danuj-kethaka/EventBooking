import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Booking {
  id: number;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  tickets: number;
  totalPrice: number;
  bookingDate: string;
  status: string;
}

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  isLoggedIn = false; // Change to true when user is authenticated
  bookings: Booking[] = []; // Empty array when not logged in

  constructor(private router: Router) {}

  login() {
    // Implement login logic or navigate to login page
    this.router.navigate(['/login']);
  }

  signup() {
    // Implement signup logic or navigate to signup page
    this.router.navigate(['/signup']);
  }
}