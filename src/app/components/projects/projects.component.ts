import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Projects</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">Showcasing my work and creative solutions</p>
        </div>
        
        <div class="filter-buttons">
          <button class="filter-btn" 
                  [class.active]="activeFilter === 'all'"
                  (click)="filterProjects('all')">
            All Projects
          </button>
          <button class="filter-btn" 
                  [class.active]="activeFilter === 'featured'"
                  (click)="filterProjects('featured')">
            Featured
          </button>
          <button class="filter-btn" 
                  [class.active]="activeFilter === 'web'"
                  (click)="filterProjects('web')">
            Web Apps
          </button>
        </div>
        
        <div class="projects-grid">
          <div class="project-card" 
               *ngFor="let project of filteredProjects; let i = index"
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="project-actions">
                  <a [href]="project.demoUrl" target="_blank" class="action-btn demo-btn">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a [href]="project.githubUrl" target="_blank" class="action-btn github-btn">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-technologies">
                <span class="tech-tag" *ngFor="let tech of project.technologies">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="projects-cta">
          <h3>Want to see more of my work?</h3>
          <p>Check out my GitHub profile for more projects and contributions</p>
          <a href="https://github.com/Ranjanigit123" target="_blank" class="btn btn-primary">
            <i class="fab fa-github"></i>
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeFilter = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Finance Application',
      description: 'Built a finance tracker to manage loans, track daily payments, and calculate balances. Added search functionality for financial records and implemented update/delete operations.',
      image: 'https://cdn.dribbble.com/userupload/25928765/file/original-c8ce00e19c60302a55a8adf55501ebd8.png?resize=400x0',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      demoUrl: 'https://updatefinance.netlify.app/',
      githubUrl: 'https://github.com/Ranjanigit123/updatefinance-fe.git',
      featured: true
    },
    {
      id: 2,
      title: 'Summarizer Website',
      description: 'Created a text summarization web app using the OpenAI API to generate concise summaries from user input. Integrated Angular frontend with Node.js backend and MongoDB for saving summaries.',
      image: 'https://webusupload.apowersoft.info/lightpdf/wp-content/uploads/2024/01/ai-summarize-text.jpg',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
      demoUrl: 'https://summarizedtext.netlify.app/',
      githubUrl: 'https://github.com/Ranjanigit123/summarized-text-fe.git',
      featured: true
    },
    {
      id: 3,
      title: 'My Portfolio',
      description: 'Developed a professional portfolio to showcase projects, technical skills, and achievements. Integrated a dynamic contact form and chatbot (Collect.chat) for interactive user engagement.',
      image: 'https://cdn.prod.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website.png',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      demoUrl: 'https://ranjaniportfolio.netlify.app/',
      githubUrl: 'https://github.com/Ranjanigit123/port-fe.git',
      featured: false
    },
    {
      id: 4,
      title: 'Real Estate Management',
      description: 'Built an application to manage property listings with full CRUD (Create, Read, Update, Delete) functionality. Enabled users to view, edit, and delete real estate entries through a clean user interface.',
      image: 'https://img.freepik.com/free-photo/mortgage-house-loan-website-login-graphic-concept_53876-134005.jpg?semt=ais_items_boosted&w=740',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      demoUrl: 'https://realestate34.netlify.app/',
      githubUrl: 'https://github.com/Ranjanigit123/realestate-fe.git',
      featured: true
    },
    {
      id: 5,
      title: 'Recipe Recommedation',
      description: 'Developed a recipe application that allows users to browse, search, filter, and save their favorite recipes. Included keyword-based search and category filters (e.g., ingredients, food type).',
      image: 'https://thumbs.dreamstime.com/b/food-recipes-tablet-computer-rustic-wooden-table-59817711.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      demoUrl: 'https://ranjanirecipeapp.netlify.app/',
      githubUrl: 'https://github.com/Ranjanigit123/recipe-fe.git',
      featured: false
    },
    
  ];

  filteredProjects: Project[] = this.projects;

  filterProjects(filter: string) {
    this.activeFilter = filter;
    
    switch (filter) {
      case 'featured':
        this.filteredProjects = this.projects.filter(project => project.featured);
        break;
      case 'web':
        this.filteredProjects = this.projects.filter(project => 
          project.technologies.includes('Angular') || project.technologies.includes('JavaScript')
        );
        break;
      default:
        this.filteredProjects = this.projects;
    }
  }
}