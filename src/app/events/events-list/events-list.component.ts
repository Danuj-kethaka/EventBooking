import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
  badge?: string;
}

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  searchTerm = '';
  selectedCategory = 'All';
  categories = ['All', 'Music', 'Sports', 'Technology', 'Food', 'Arts'];

  events: Event[] = [
    { id:1,title:'Neon Nights Music Festival',date:'2026-08-24',location:'Port City Colombo',price:5500,category:'Music',badge:'Trending',imageUrl:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85',description:'A high-energy open-air festival with live artists, lights and unforgettable city views.' },
    { id:2,title:'Future Tech Summit 2026',date:'2026-08-31',location:'BMICH, Colombo',price:3500,category:'Technology',badge:'Popular',imageUrl:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85',description:'Meet innovators, founders and developers shaping the next generation of technology.' },
    { id:3,title:'Taste of Colombo',date:'2026-09-06',location:'Galle Face Green',price:1800,category:'Food',imageUrl:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85',description:'Discover signature dishes, street food and chef experiences from around the city.' },
    { id:4,title:'City Lights Live',date:'2026-09-14',location:'Nelum Pokuna',price:7200,category:'Music',badge:'Limited',imageUrl:'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85',description:'An immersive live concert experience with a premium stage, sound and visual production.' },
    { id:5,title:'Colombo Night Run',date:'2026-09-20',location:'Independence Square',price:2500,category:'Sports',imageUrl:'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85',description:'Run through the heart of Colombo with music, lights and a festival finish line.' },
    { id:6,title:'Modern Art Weekend',date:'2026-09-27',location:'Colombo 07',price:1200,category:'Arts',imageUrl:'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85',description:'A curated weekend of contemporary art, installations, talks and creative workshops.' }
  ];

  get filteredEvents(): Event[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.events.filter(event => {
      const matchesCategory = this.selectedCategory === 'All' || event.category === this.selectedCategory;
      const matchesText = !term || `${event.title} ${event.location} ${event.category}`.toLowerCase().includes(term);
      return matchesCategory && matchesText;
    });
  }
}
