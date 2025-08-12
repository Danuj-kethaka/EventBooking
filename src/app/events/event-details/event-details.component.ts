import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
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
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: Event = {
    id: 1,
    title: 'Music Festival 2023',
    date: '2023-12-15',
    location: 'Central Park',
    price: 50,
    imageUrl: 'https://via.placeholder.com/800x400?text=Music+Festival',
    description: 'Annual music festival featuring top artists from around the world. This year we have special performances from international stars and local talents. The event will run from 10 AM to 10 PM with food stalls and merchandise available.',
    organizer: 'Global Events Inc.',
    capacity: 5000,
    category: 'Music'
  };

  constructor(private route: ActivatedRoute) {
    // In a real app, you would fetch event details based on route parameter
    this.route.params.subscribe(params => {
      // const eventId = params['id'];
      // Fetch event details using eventId
    });
  }
}