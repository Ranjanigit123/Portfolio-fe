//about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="about-content">
          <div class="about-text card">
            <h3 class="about-heading">Hello, I'm Ranjani Govindharaj</h3>
            <h4 class="about-subheading">A Passionate Full Stack Developer</h4>
            
            <p class="about-description">
              Final-year MCA student at Vivekanandha Institute of Information and Management Studies (Anna University), with a CGPA of 8.6. I love turning ideas into meaningful digital experiences and enjoy building reliable, user-friendly web applications from front to back.
            </p>
            
            <div class="stats-grid">
              <div class="stat-item">
                <h4>8.6</h4>
                <p>CGPA</p>
              </div>
              <div class="stat-item">
                <h4>10+</h4>
                <p>Projects</p>
              </div>
              <div class="stat-item">
                <h4>Fresher</h4>
                <p>Entry Level</p>
              </div>
              <div class="stat-item">
                <h4>100%</h4>
                <p>Dedication</p>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="image-wrapper">
              <img src="assets/profile pic22.jpg" 
                   alt="About Ranjani" class="about-img">
              <div class="floating-elements">
                <div class="floating-element element-1">
                  <i class="fas fa-code"></i>
                </div>
                <div class="floating-element element-2">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <div class="floating-element element-3">
                  <i class="fas fa-mobile-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="qualities-section">
          <h3 class="qualities-title">What Makes Me Different</h3>
          <div class="qualities-grid">
            <div class="quality-card">
              <div class="quality-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h4>Problem Solver</h4>
              <p>I approach challenges with creativity and analytical thinking to deliver efficient solutions.</p>
            </div>
            
            <div class="quality-card">
              <div class="quality-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h4>Quick Learner</h4>
              <p>Constantly updating my skills with the latest technologies and industry best practices.</p>
            </div>
            
            <div class="quality-card">
              <div class="quality-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>Team Player</h4>
              <p>Excellent collaboration skills with a focus on communication and shared success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}