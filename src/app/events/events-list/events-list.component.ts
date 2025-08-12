import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  eventsAnimated = false;
  events: Event[] = [
    {
      id: 1,
      title: 'Music Festival 2023',
      date: '2023-12-15',
      location: 'Central Park',
      price: 5000,
      imageUrl: 'assets/images/fes/fes1.jpg',
      description: 'Annual music festival featuring top artists from around the world.'
    },
    {
      id: 2,
      title: 'Tech Conference',
      date: '2023-11-20',
      location: 'Convention Center',
      price: 7000,
      imageUrl: 'assets/images/fes/fes2.webp',
      description: 'Learn about the latest in technology and innovation.'
    },
    {
      id: 3,
      title: 'Food Expo',
      date: '2023-10-25',
      location: 'Exhibition Hall',
      price: 2500,
      imageUrl: 'assets/images/fes/fes3.jpg',
      description: 'Taste delicious food from top chefs and restaurants.'
    },
    {
      id: 4,
      title: 'Art Exhibition',
      date: '2023-11-05',
      location: 'Modern Art Museum',
      price: 10000,
      imageUrl: 'assets/images/fes/fes4.jpg',
      description: 'Contemporary art from emerging and established artists.'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.eventsAnimated = true;
    }, 100);
  }
}