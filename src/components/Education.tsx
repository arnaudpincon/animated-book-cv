import './styles/book.css';
import './styles/education.css';
import { Code, Award, Lightbulb, GraduationCap } from "lucide-react";

const Education  = ({ index1 = 0, index2 = 3 }) => {
   
  // Données d'éducation
  const educations = [
    {
      period: "03/2024 - 03/2025",
      title: "Python & Gen AI Training",
      institution: "Holberton School - Melbourne, Australia",
      description: "Project-based course focusing on Python programming, Generative AI with Azure OpenAI and Hugging Face, SQL, Git, and UNIX. Delivered online with a collaborative, hands-on approach.",
      icon: Code
    },
    {
      period: "09/2022 - 12/2022",
      title: "Certified Scrum PSD I",
      institution: "Scrum.org",
      description: "Certified Scrum Professional (CSP-SD) with expertise in Agile methodologies, focusing on iterative development, team collaboration, and continuous improvement.",
      icon: Award
    },
    {
      period: "06/2018 - 08/2018",
      title: "Java EE Training Study",
      institution: "INTI Adaming - Strasbourg, France",
      description: "Training in Java JEE, covering enterprise-level application development, including web technologies, frameworks (Spring, Hibernate), and best practices for building scalable, maintainable systems.",
      icon: Code
    },
    {
      period: "09/2014 - 09/2016",
      title: "Master's in Cognitive Sciences and Digital Media",
      institution: "University of Lorraine - Nancy, France",
      description: "Focused on the intersection of human cognition, digital technologies, and media. The programme covered topics such as human-computer interaction, AI, multimedia systems, and the design of digital experiences.",
      icon: Lightbulb
    },
    {
      period: "09/2011 - 09/2014",
      title: "B.A. in Applied Mathematics and Computer Sciences in the Humanities and Social Sciences",
      institution: "University of Lorraine - Nancy, France",
      description: "Studies in Applied Mathematics with a focus on algebra, analysis, probability, statistics, programming, economics, and sociology. The programme offered specialized tracks, including cognitive sciences, economics, and applied computer methods for business management.",
      icon: GraduationCap
    }
  ];

  return (

            <div className="education-container">
              {educations.slice(index1, index2).map((education, index) => {
                const IconComponent = education.icon;
                return (
                  <div key={index} className="education-item">
                    
                    <div className="education-icon-container">
                      <IconComponent size={20} className="education-icon" />
                    </div>
                    <div className="education-content">
                        <h3 className="education-degree">{education.title}</h3>
                        <div className="education-institution">{education.institution}</div>
                        <span className="education-period">{education.period}</span>
                        <p className="education-description">{education.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
  );
};

export default Education;