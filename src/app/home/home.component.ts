import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSlide = 0;
  
  featuredEvents = [
    {
      title: "Music Festival",
      date: "June 15, 2023",
      location: "Central Park",
      image: "assets/images/event/event1.jpg"
    },
    {
      title: "Tech Conference",
      date: "July 22, 2023",
      location: "Convention Center",
      image: "assets/images/event/event3.jpeg"
    },
    {
      title: "Food Expo",
      date: "August 5, 2023",
      location: "Exhibition Hall",
      image: "assets/images/event/event3.webp"
    }
  ];

  slides = [
    { title: "Discover Amazing Events", text: "Find and book the best events in your city" },
    { title: "Exclusive Experiences", text: "Access VIP events and special offers" },
    { title: "Create Lasting Memories", text: "Book unforgettable experiences with ease" }
  ];

  // Stats animation properties
  stats = {
    events: 0,
    customers: 0,
    cities: 0
  };
  finalStats = {
    events: 10000,
    customers: 500000,
    cities: 50
  };
  animationDuration = 2000;
  statsAnimated = false;

  // Featured events animation
  eventsAnimated = false;

  // Slide navigation methods
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // Updated HostListener without $event parameter
  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkStatsAnimation();
    this.checkFeaturedEventsAnimation();
  }

  checkStatsAnimation() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && !this.statsAnimated) {
      const rect = statsSection.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.75) && 
                       (rect.bottom >= window.innerHeight * 0.25);
      
      if (isVisible) {
        this.animateStats();
        this.statsAnimated = true;
      }
    }
  }

  checkFeaturedEventsAnimation() {
    const featuredSection = document.querySelector('.featured-events');
    if (featuredSection && !this.eventsAnimated) {
      const rect = featuredSection.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.75;
      
      if (isVisible) {
        this.eventsAnimated = true;
      }
    }
  }

  animateStats() {
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / this.animationDuration, 1);
      
      this.stats.events = Math.floor(progress * this.finalStats.events);
      this.stats.customers = Math.floor(progress * this.finalStats.customers);
      this.stats.cities = Math.floor(progress * this.finalStats.cities);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }


   // Testimonial properties
  testimonials = [
    {
      quote: "The booking process was so easy and the event was amazing!",
      name: "Sarah J.",
      role: "Event Enthusiast",
      image: "assets/images/user/user1.jpg"
    },
    {
      quote: "Best event platform I've used. Highly recommended!",
      name: "Michael T.",
      role: "Music Lover",
      image: "assets/images/user/user2.jpg"
    },
    {
      quote: "Five-star experience from start to finish.",
      name: "Emma K.",
      role: "Frequent Attendee",
      image: "assets/images/user/user3.jpg"
    }
  ];
  currentTestimonial = 0;
  testimonialInterval: any;

  ngOnInit() {
    this.startTestimonialRotation();
  }

  ngOnDestroy() {
    this.stopTestimonialRotation();
  }

  startTestimonialRotation() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change every 5 seconds
  }

  stopTestimonialRotation() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  nextTestimonial() {
    this.currentTestimonial = 
      (this.currentTestimonial + 1) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentTestimonial = index;
    this.stopTestimonialRotation();
    this.startTestimonialRotation();
  }

}