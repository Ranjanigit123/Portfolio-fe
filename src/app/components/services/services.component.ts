import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Services</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">What I offer to bring your ideas to life</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" 
               *ngFor="let service of services; let i = index"
               [style.animation-delay]="i * 0.2 + 's'">
            <div class="service-icon" [style.background]="service.gradient">
              <i [class]="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li *ngFor="let feature of service.features">
                <i class="fas fa-check"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="work-process">
          <h3 class="process-title">My Work Process</h3>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">01</div>
              <h4>Planning</h4>
              <p>Understanding requirements and creating a detailed project roadmap</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">02</div>
              <h4>Design</h4>
              <p>Creating wireframes and designing user-friendly interfaces</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">03</div>
              <h4>Development</h4>
              <p>Building robust applications with clean, maintainable code</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">04</div>
              <h4>Testing</h4>
              <p>Thorough testing to ensure quality and performance</p>
            </div>
            
            <div class="process-step">
              <div class="step-number">05</div>
              <h4>Delivery</h4>
              <p>Deploying and providing ongoing support for your project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-code',
      title: 'Deep Skill Set',
      description: 'Web developer with deep skills in creating efficient, stunning websites. Passionate about turning ideas into online experiences.',
      features: [
        'Full Stack Development',
        'Modern Web Technologies',
        'Responsive Design',
        'Performance Optimization',
        'Clean Code Architecture'
      ],
      gradient: 'linear-gradient(45deg, #ff6b6b, #ee5a52)'
    },
    {
      icon: 'fas fa-palette',
      title: 'Creative Work',
      description: 'I specialize in creating creative and unique user experiences, bringing innovation and flair to my work.',
      features: [
        'UI/UX Design',
        'Creative Problem Solving',
        'Innovative Solutions',
        'User-Centered Design',
        'Visual Storytelling'
      ],
      gradient: 'linear-gradient(45deg, #4ecdc4, #44a08d)'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Strong Dedication',
      description: 'I possess a strong dedication to my work, consistently striving for excellence and achieving goals with unwavering commitment.',
      features: [
        'Timely Delivery',
        'Quality Assurance',
        'Continuous Learning',
        'Client Satisfaction',
        'Professional Excellence'
      ],
      gradient: 'linear-gradient(45deg, #667eea, #764ba2)'
    }
  ];
}