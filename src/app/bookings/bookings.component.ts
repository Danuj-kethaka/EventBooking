import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Booking {
  id: number;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  location: string;
  tickets: number;
  totalPrice: number;
  status: 'Confirmed' | 'Pending';
  image: string;
}

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  isLoggedIn = false;

  bookings: Booking[] = [
    {
      id: 1,
      eventId: 1,
      eventTitle: 'Neon Nights Music Festival',
      eventDate: '2026-08-24',
      location: 'Port City Colombo',
      tickets: 2,
      totalPrice: 11000,
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85'
    }
  ];

  constructor(private router: Router) {}

  login(): void { this.router.navigate(['/login']); }
  signup(): void { this.router.navigate(['/signup']); }
}
