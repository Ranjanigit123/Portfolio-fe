import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ServicesComponent } from '../services/services.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>
      <main>
        <app-home id="home"></app-home>
        <app-about id="about"></app-about>
        <app-skills id="skills"></app-skills>
        <app-services id="services"></app-services>
        <app-projects id="projects"></app-projects>
        <app-contact id="contact"></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  
  ngOnInit() {
    // Add scroll animation observer
    this.observeElements();
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections
    const sections = document.querySelectorAll('section, .card, .skill-item');
    sections.forEach(section => observer.observe(section));
  }
}