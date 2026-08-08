import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface FeaturedEvent {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  price: number;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchText = '';
  location = 'Colombo';

  categories = [
    { name: 'Music', icon: '♪', count: 128 },
    { name: 'Sports', icon: '⚡', count: 84 },
    { name: 'Theatre', icon: '✦', count: 53 },
    { name: 'Food', icon: '✺', count: 67 },
    { name: 'Business', icon: '◫', count: 42 },
    { name: 'Festivals', icon: '☼', count: 76 }
  ];

  featuredEvents: FeaturedEvent[] = [
    {
      id: 1,
      title: 'Neon Nights Music Festival',
      category: 'Music Festival',
      date: '24 AUG · 6:00 PM',
      location: 'Port City Colombo',
      price: 5500,
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 2,
      title: 'Future Tech Summit 2026',
      category: 'Technology',
      date: '31 AUG · 9:00 AM',
      location: 'BMICH, Colombo',
      price: 3500,
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 3,
      title: 'Taste of Colombo',
      category: 'Food & Lifestyle',
      date: '06 SEP · 4:00 PM',
      location: 'Galle Face Green',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85'
    },
    {
      id: 4,
      title: 'City Lights Live',
      category: 'Concert',
      date: '14 SEP · 7:30 PM',
      location: 'Nelum Pokuna',
      price: 7200,
      badge: 'Limited',
      image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85'
    }
  ];

  stats = [
    { value: '250+', label: 'Live events' },
    { value: '40K+', label: 'Happy guests' },
    { value: '25+', label: 'Top venues' },
    { value: '4.9/5', label: 'Guest rating' }
  ];

  searchEvents(): void {
    // Connect this to your event filtering or API later.
    console.log('Searching', this.searchText, this.location);
  }
}
