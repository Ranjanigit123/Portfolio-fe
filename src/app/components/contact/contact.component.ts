//C:\My project\frontend\src\app\components\contact\contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ContactForm {
  fullName: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">Let's work together to bring your ideas to life</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always excited to discuss new opportunities and projects. Whether you have a question or just want to say hello, feel free to reach out!</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-info">
                  <h4>Email</h4>
                  <p>ranjanigovindharaj206&#64;gmail.com</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-info">
                  <h4>Phone</h4>
                  <p>+91 82207 50250</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="method-info">
                  <h4>WhatsApp</h4>
                  <p>+91 82207 50250</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="method-info">
                  <h4>Location</h4>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://www.linkedin.com/in/ranjani206/" target="_blank" class="social-link linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Ranjanigit123" target="_blank" class="social-link github">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:ranjanigovindharaj206@gmail.com@gmail.com" class="social-link email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="fullName">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  [(ngModel)]="formData.fullName"
                  required
                  placeholder="Enter your full name"
                  class="form-control"
                >
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    placeholder="your.email@example.com"
                    class="form-control"
                  >
                </div>
                
                <div class="form-group">
                  <label for="mobile">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    name="mobile"
                    [(ngModel)]="formData.mobile"
                    placeholder="+91 98765 43210"
                    class="form-control"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Email Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="What's this about?"
                  class="form-control"
                >
              </div>
              
              <div class="form-group">
                <label for="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  placeholder="Tell me about your project or just say hello!"
                  class="form-control"
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary"
                [disabled]="isSubmitting || !contactForm.form.valid"
                [class.loading]="isSubmitting"
              >
                <span *ngIf="!isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  Send Message
                </span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Success/Error Notification -->
      <div class="notification" 
           [class.show]="showNotification"
           [class.success]="notificationType === 'success'"
           [class.error]="notificationType === 'error'">
        <div class="notification-content">
          <i [class]="notificationType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
          <span>{{ notificationMessage }}</span>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: ContactForm = {
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showNotification = false;
  notificationType: 'success' | 'error' = 'success';
  notificationMessage = '';

  constructor(private http: HttpClient) {}

  async onSubmit() {
    if (this.isSubmitting) return;

    // Client-side validation
    if (!this.formData.fullName.trim() || !this.formData.email.trim() || 
        !this.formData.subject.trim() || !this.formData.message.trim()) {
      this.showErrorNotification('Please fill in all required fields.');
      return;
    }

    // Email validation on frontend
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email.trim())) {
      this.showErrorNotification('Please enter a valid email address.');
      return;
    }

    this.isSubmitting = true;

    // Clean the data before sending
    const cleanFormData = {
      fullName: this.formData.fullName.trim(),
      email: this.formData.email.trim().toLowerCase(),
      mobile: this.formData.mobile.trim(),
      subject: this.formData.subject.trim(),
      message: this.formData.message.trim()
    };

    console.log('Sending form data:', cleanFormData);

    try {
      const response = await this.http.post('https://portfolio-be-5rqa.onrender.com/api/contact', cleanFormData).toPromise();
      
      this.showSuccessNotification('Your message has been sent successfully! I\'ll get back to you soon.');
      this.resetForm();
      
    } catch (error: any) {
      console.error('Error sending message:', error);
      
      let errorMessage = 'Failed to send message. Please try again or contact me directly.';
      
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      }
      
      this.showErrorNotification(errorMessage);
    } finally {
      this.isSubmitting = false;
    }
  }

  private showSuccessNotification(message: string) {
    this.notificationType = 'success';
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => this.showNotification = false, 5000);
  }

  private showErrorNotification(message: string) {
    this.notificationType = 'error';
    this.notificationMessage = message;
    this.showNotification = true;
    setTimeout(() => this.showNotification = false, 5000);
  }

  private resetForm() {
    this.formData = {
      fullName: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    };
  }
}