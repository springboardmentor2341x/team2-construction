import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;
  
  // Hero Slider State
  slides = [
    { url: '/construction1.jpg' },
    { url: '/construction2.jpg' },
    { url: '/construction3.jpg' },
    { url: '/construction4.jpg' },
    { url: '/construction5.jpg' },
    { url: '/construction6.jpg' },
    { url: '/construction7.jpg' }
  ];
  currentSlide = 0;
  private autoPlayInterval: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoPlay();
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      this.animateElements.forEach((el) => {
        el.nativeElement.classList.add('observer-active');
        observer.observe(el.nativeElement);
      });
    } else if (!this.isBrowser) {
      // Server-side fallback already handled by CSS defaulting to opacity 1
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // --- Slider Controls ---
  
  startAutoPlay(): void {
    if (this.autoPlayInterval) {
      this.stopAutoPlay();
    }
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // 2 seconds per slide
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  onSliderMouseEnter(): void {
    this.stopAutoPlay();
  }

  onSliderMouseLeave(): void {
    this.startAutoPlay();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
