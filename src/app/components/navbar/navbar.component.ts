import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <div class="nav-logo">
          <h3>Ranjani<span>.dev</span></h3>
        </div>
        
        <ul class="nav-menu" [class.active]="isMenuOpen">
          <li class="nav-item">
            <a href="#home" class="nav-link" (click)="closeMenu()">Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link" (click)="closeMenu()">About</a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link" (click)="closeMenu()">Skills</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link" (click)="closeMenu()">Services</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link" (click)="closeMenu()">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link" (click)="closeMenu()">Contact</a>
          </li>
        </ul>
        
        <div class="hamburger" [class.active]="isMenuOpen" (click)="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  ngOnInit() {
    this.updateActiveLink();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.updateActiveLink();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  private updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
}