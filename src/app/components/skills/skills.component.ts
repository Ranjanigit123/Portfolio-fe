// skills.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Skills</h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">Technologies I work with to bring ideas to life</p>
        </div>
        
        <div class="skills-grid">
          <div class="skill-card" 
               *ngFor="let skill of skills; let i = index"
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="skill-icon" [style.background]="skill.color">
              <i [class]="skill.icon"></i>
            </div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <div class="skill-progress">
              <div class="progress-bar">
                <div class="progress-fill" 
                     [style.width.%]="skill.level"
                     [style.background]="skill.color">
                </div>
              </div>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
        
        <div class="skills-summary">
          <div class="summary-card">
            <h3>Frontend Development</h3>
            <p>Creating responsive and interactive user interfaces with modern frameworks and libraries.</p>
            <div class="tech-stack">
              <span class="tech-tag">Angular</span>
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">TypeScript</span>
            </div>
          </div>
          
          <div class="summary-card">
            <h3>Backend Development</h3>
            <p>Building robust server-side applications and APIs with scalable architecture.</p>
            <div class="tech-stack">
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Express.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">MySQL</span>
            </div>
          </div>
          
          <div class="summary-card">
            <h3>Programming Languages</h3>
            <p>Proficient in multiple programming languages for diverse development needs.</p>
            <div class="tech-stack">
              <span class="tech-tag">C++</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">TypeScript</span>
            </div>
          </div>
          
          <div class="summary-card">
            <h3>Development Tools</h3>
            <p>Using industry-standard tools for version control and collaborative development.</p>
            <div class="tech-stack">
              <span class="tech-tag">Git</span>
              <span class="tech-tag">GitHub</span>
              <span class="tech-tag">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'HTML', level: 95, icon: 'fab fa-html5', color: 'linear-gradient(45deg, #e34c26, #f06529)' },
    { name: 'CSS', level: 90, icon: 'fab fa-css3-alt', color: 'linear-gradient(45deg, #1572b6, #33a9dc)' },
    { name: 'JavaScript', level: 88, icon: 'fab fa-js-square', color: 'linear-gradient(45deg, #f7df1e, #f7e018)' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square', color: 'linear-gradient(45deg, #007acc, #0f7dc0)' },
    { name: 'Angular', level: 87, icon: 'fab fa-angular', color: 'linear-gradient(45deg, #dd0031, #c3002f)' },
    { name: 'Node.js', level: 83, icon: 'fab fa-node-js', color: 'linear-gradient(45deg, #339933, #68cc68)' },
    { name: 'Express.js', level: 80, icon: 'fas fa-server', color: 'linear-gradient(45deg, #000000, #333333)' },
    { name: 'MongoDB', level: 82, icon: 'fas fa-database', color: 'linear-gradient(45deg, #47a248, #4db33d)' },
    { name: 'MySQL', level: 78, icon: 'fas fa-database', color: 'linear-gradient(45deg, #00758f, #f29111)' },
    { name: 'Python', level: 75, icon: 'fab fa-python', color: 'linear-gradient(45deg, #3776ab, #ffd43b)' },
    { name: 'C++', level: 80, icon: 'fas fa-code', color: 'linear-gradient(45deg, #00599c, #004482)' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt', color: 'linear-gradient(45deg, #f05032, #f14e32)' },
    { name: 'GitHub', level: 88, icon: 'fab fa-github', color: 'linear-gradient(45deg, #333, #24292e)' }
  ];

  ngOnInit() {
    // Animate skill bars when component loads
    setTimeout(() => {
      this.animateSkillBars();
    }, 500);
  }

  private animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        (bar as HTMLElement).style.width = this.skills[index].level + '%';
      }, index * 100);
    });
  }
}