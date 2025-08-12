import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutHero') aboutHero!: ElementRef;
  @ViewChild('aboutIntro') aboutIntro!: ElementRef;
  @ViewChild('statsContainer') statsContainer!: ElementRef;
  @ViewChild('aboutFeatures') aboutFeatures!: ElementRef;
  @ViewChild('teamSection') teamSection!: ElementRef;

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const sections = [
      this.aboutHero.nativeElement,
      this.aboutIntro.nativeElement,
      this.statsContainer.nativeElement,
      this.aboutFeatures.nativeElement,
      this.teamSection.nativeElement
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
      section.classList.add('slide-initial');
      observer.observe(section);
    });
  }
}