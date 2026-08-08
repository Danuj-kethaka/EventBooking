import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
  organizer: string;
  capacity: number;
  category: string;
}

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  ticketCount = 1;

  event: Event = {
    id: 1,
    title: 'Neon Nights Music Festival',
    date: '2026-08-24',
    time: '6:00 PM',
    location: 'Port City Colombo',
    price: 5500,
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=90',
    description: 'Step into a night of sound, light and unforgettable performances. Neon Nights brings together leading artists, immersive stage production, food pop-ups and an electric crowd in one of Colombo’s most exciting waterfront venues.',
    organizer: 'EventBook Live',
    capacity: 5000,
    category: 'Music Festival'
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const eventId = Number(params['id']);
      if (eventId) this.event.id = eventId;
    });
  }

  get totalPrice(): number {
    return this.ticketCount * this.event.price;
  }

  changeTickets(amount: number): void {
    this.ticketCount = Math.min(10, Math.max(1, this.ticketCount + amount));
  }
}
