import { Smartphone, Code, Bot, Pill, LeafyGreen } from 'lucide-react';
import './styles/projects.css';

const Projects = ({ index1 = 0, index2 = 1 }) => {
  // Données des projets
  const projects = [
    {
      title: "React Native M1 Singapore: Mobile App",
      link: "https://apps.apple.com/sg/app/my-m1/id1494104254",
      description: "Worked as a Front-end Developer on M1 Limited's mobile app (Singapore telecom), developing new screens, fixing bugs, refactoring the app structure, and reducing technical debt. Implemented role-based UI adjustments and developed a native widget for iOS/Android, improving app functionality and user experience.",
      technologies: ["React Native", "TypeScript", "iOS", "Android", "Redux"],
      icon: Smartphone
    },
    {
      title: "Bluescope Thailand: Shopfront",
      link: "https://www.nsbluescope.com",
      description: "Built an MVP shopfront from scratch for BlueScope Steel Limited using Next.js and CommerceTool. Implemented product catalogue, shopping cart, and order management features. Integrated external payment flow and utilised Azure Cloud for authentication and secure user management",
      technologies: ["Next.js", "CommerceTool", "Azure Cloud"],
      icon: Code
    },
    {
      title: "AFPA: Training Registration Platform",
      link: "https://www.afpa.fr/",
      description: "Worked as a full-stack developer on the AFPA Training Registration Platform, using Liferay 6.2 for the web portal. Developed backend features with Java, managed the database with PostgreSQL, and implemented the frontend using JSP. Contributed to gathering client requirements and defining website features",
      technologies: ["Java", "Liferay 6.2", "PostgreSQL"],
      icon: Code
    },
    {
      title: "Eco onepoint: Web Tool",
      link: "https://greenops.green-digital.io/",
      description: "Worked as a full-stack developer on the AFPA Training Registration Platform, using Liferay 6.2 for the web portal. Developed backend features with Java, managed the database with PostgreSQL, and implemented the frontend using JSP. Contributed to gathering client requirements and defining website features",
      technologies: ["Next.js", "Node.js", "Azure Cloud", "CO2.js"],
      icon: LeafyGreen
    },
    {
      title: "Detective GenAI: Video Game",
      link: "",
      description: "Designed an experimental GenAI-powered detective game in Python with Gradio UI and multi-agent LLM backend (OpenAI, Mistral, LLaMA 3). Players interact via chatbot to explore, gather clues, question NPCs, and submit theories validated by specialized AI agents",
      technologies: ["Next.js", "Node.js", "Azure Cloud", "Carbon API"],
      icon: Bot
    },
    {
      title: "Mission Offi’Sim: Serious Game",
      link: "https://mission-offisim.univ-lorraine.fr/",
      description: "Collaborated on the design and development of an award-winning training game for pharmacy students (MEDEA Awards 2018). As a research engineer, contributed to UI design, gameplay balancing, and reward system setup. Involved in script writing, video direction with actors, and conducting interviews with healthcare professionals and researchers.",
      technologies: [],
      icon: Pill
    }

  ];

  return (
    <div className="projects-container">
        <div className="projects-list">
          {projects.slice(index1, index2).map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="project-item">
                <div className="project-header">
                  <div className="project-title-container">
                    <IconComponent size={20} className="project-icon" />
                    <h3 className="project-title">{project.title}</h3>
                    <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                      {project.link}
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-technology">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Projects;