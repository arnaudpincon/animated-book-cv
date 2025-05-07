import React from 'react';
import {
  Code2, Coffee, FileCode, Database, FileJson, Palette,
  Atom, ArrowRight, Server, LifeBuoy, Zap, Cloud, Container,
  type LucideIcon
} from "lucide-react";
import '../components/styles/skills.css';

// Définition des interfaces
interface SkillItem {
  name: string;
  icon: string;
}

interface IconMap {
  [key: string]: LucideIcon;
}

const Skills: React.FC = () => {
  // Logos data with icons from lucide-react
  const languages: SkillItem[] = [
    { name: "JavaScript/TypeScript", icon: "Code2" },
    { name: "Java", icon: "Coffee" },
    { name: "Python", icon: "FileCode" },
    { name: "SQL", icon: "Database" },
    { name: "HTML", icon: "FileJson" },
    { name: "CSS", icon: "Palette" }
  ];
 
  const technologies: SkillItem[] = [
    { name: "React JS/Native", icon: "Atom" },
    { name: "Next.js", icon: "ArrowRight" },
    { name: "Node.js", icon: "Server" },
    { name: "Liferay 6.2", icon: "LifeBuoy" },
    { name: "FastAPI", icon: "Zap" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Microsoft Azure", icon: "Cloud" },
    { name: "Docker", icon: "Container" }
  ];
 
  // Function to get the icon component based on name
  const getIcon = (iconName: string): LucideIcon => {
    const icons: IconMap = {
      Code2, Coffee, FileCode, Database, FileJson, Palette,
      Atom, ArrowRight, Server, LifeBuoy, Zap, Cloud, Container
    };
    return icons[iconName];
  };

  return (
    <div className="skills-container">
      <div className="grid-container">
        {/* Languages Section */}
        <div className="section">
          <h3 className="section-title">Languages</h3>
          <div className="skills-grid">
            {languages.map((lang, index) => {
              const IconComponent = getIcon(lang.icon);
              return (
                <div key={index} className="skill-card">
                  <IconComponent size={20} className="skill-icon" />
                  <span className="skill-name">{lang.name}</span>
                </div>
              );
            })}
          </div>
        </div>
         
        {/* Technologies Section */}
        <div className="section">
          <h3 className="section-title">Technologies</h3>
          <div className="skills-grid">
            {technologies.map((tech, index) => {
              const IconComponent = getIcon(tech.icon);
              return (
                <div key={index} className="skill-card">
                  <IconComponent size={20} className="skill-icon" />
                  <span className="skill-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;