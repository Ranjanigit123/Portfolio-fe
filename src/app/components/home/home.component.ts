import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home-section">
      <div class="container">
        <div class="home-content">
          <div class="home-text fade-in-left">
            <h1>Hi, I'm <span class="highlight">Ranjani Govindharaj</span></h1>
            <h2 class="typewriter">{{ displayText }}<span class="cursor">|</span></h2>
            <p class="home-description">
              A passionate Full Stack Developer with expertise in modern web technologies.
              I create innovative solutions and bring ideas to life through clean, efficient code.
            </p>
            
            <div class="social-links">
              <a href="https://www.linkedin.com/in/ranjani206/" target="_blank" class="social-link linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Ranjanigit123" target="_blank" class="social-link github">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:ranjanirithu206@gmail.com" class="social-link email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/+918220750250" target="_blank" class="social-link whatsapp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
            
            <div class="home-actions">
              <a href="#contact" class="btn btn-primary">Get In Touch</a>
              <a href="/assets/Ranjani Govindharaj_CV.pdf" download class="btn btn-outline">
                <i class="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>
          
          <div class="home-image fade-in-right">
            <div class="image-container">
              <img src="assets/R pic (1).jpg" 
                   alt="Ranjani Govindharaj" class="profile-img">
              <div class="image-bg"></div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator">
          <a href="#about" class="scroll-down">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayText = '';
  private typewriterTexts = [
    'Full Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'MEAN Stack Developer'
  ];
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typewriterInterval: any;

  ngOnInit() {
    this.startTypewriter();
  }

  ngOnDestroy() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
  }

  private startTypewriter() {
    this.typewriterInterval = setInterval(() => {
      const currentText = this.typewriterTexts[this.currentTextIndex];
      
      if (!this.isDeleting) {
        // Typing
        this.displayText = currentText.substring(0, this.currentCharIndex + 1);
        this.currentCharIndex++;
        
        if (this.currentCharIndex === currentText.length) {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            this.isDeleting = true;
          }, 2000);
        }
      } else {
        // Deleting
        this.displayText = currentText.substring(0, this.currentCharIndex - 1);
        this.currentCharIndex--;
        
        if (this.currentCharIndex === 0) {
          // Finished deleting, move to next text
          this.isDeleting = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterTexts.length;
        }
      }
    }, this.isDeleting ? 50 : 100);
  }
}