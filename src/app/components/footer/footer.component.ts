import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-logo">Ranjani<span>.dev</span></h3>
            <p class="footer-description">
              Full Stack Developer passionate about creating innovative solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/ranjani206/" target="_blank" class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Ranjanigit123" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:ranjanigovindharaj206@gmail.com" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/+918220750250" target="_blank" class="social-link">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Portfolio</h4>
            <ul class="footer-links">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/assets/Ranjani Govindharaj_CV.pdf" download>Resume</a></li>
              <li><a href="https://github.com/Ranjanigit123" target="_blank">GitHub</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p><i class="fas fa-envelope"></i> ranjanigovindharaj206&#64;gmail.com</p>
              <p><i class="fas fa-phone"></i> +91 82207 50250</p>
              <p><i class="fas fa-map-marker-alt"></i> Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p class="copyright">
              &copy; {{ currentYear }} Made with <i class="fas fa-heart"></i> by <strong>Ranjani</strong>
            </p>
            <p class="tech-stack">
              Built with Angular • Node.js • MongoDB • Express.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}