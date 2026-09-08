import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      window.scrollTo(0, 0);
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
    }
  }
}
