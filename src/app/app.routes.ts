import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'about', component: AboutComponent }
];