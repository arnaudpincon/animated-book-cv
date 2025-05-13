import './styles/book.css';
import './styles/experience.css';
import { Briefcase, Code, Server, Cloud, Bot, PenTool, Users, Zap, VideoIcon, BookOpen } from "lucide-react";

export const Experience = ({ experienceIndex = 0 }) => {
    const experiences = [
        // Expérience 1 - onepoint APAC
        {
            title: "Digital Platform Consultant - Full Stack Developer at onepoint APAC - Sydney, Australia",
            description: "Worked in a Scrum environment on various projects, including mobile app development, MVP web platforms, and experimental GenAI-based games. Collaborated with cross-functional teams to deliver innovative, scalable solutions for clients and internal tools.",
            responsibilities: [
                {
                    text: "Contributed to the design, development, and optimization of user interfaces, backend systems, and cloud integrations using Next.js, Node.js, Python, and Azure Cloud.",
                    icon: <Code size={18} className="skill-icon" />
                },
                {
                    text: "Developed M1 Limited's mobile app, improving UI, fixing bugs, and refactoring app structure.",
                    icon: <Briefcase size={18} className="skill-icon" />
                },
                {
                    text: "Built an MVP shopfront for BlueScope Steel using Next.js and CommerceTool, implementing product catalogue, shopping cart, and external payment integration.",
                    icon: <Server size={18} className="skill-icon" />
                },
                {
                    text: "Developed the Eco Web Tool to assess the environmental impact of websites, leveraging Next.js, Node.js, and Azure Cloud for scalable serverless processing.",
                    icon: <Cloud size={18} className="skill-icon" />
                },
                {
                    text: "Designed an experimental detective game using Python and Gradio, integrating multiple LLM agents (OpenAI, Mistral, LLaMA 3) to create an interactive chatbot experience.",
                    icon: <Bot size={18} className="skill-icon" />
                }
            ]
        },
        // Expérience 2 - Sopra Steria
        {
            title: "Design and Development Engineer at Sopra Steria - Strasbourg, France",
            description: "Worked in an agile-like environment as a full-stack developer and UX designer on public-sector digital platforms.",
            responsibilities: [
                {
                    text: "Contributed to the development and maintenance of AFPA's training registration platform using Liferay 6.2 (Java, JSP, PostgreSQL).",
                    icon: <Code size={18} className="skill-icon" />
                },
                {
                    text: "Designed and prototyped user interfaces for the public transport system in Strasbourg, improving user experience and accessibility.",
                    icon: <PenTool size={18} className="skill-icon" />
                },
                {
                    text: "Implemented responsive designs that improved mobile usability for public service applications.",
                    icon: <Zap size={18} className="skill-icon" />
                },
                {
                    text: "Collaborated with stakeholders to gather requirements and refine project specifications.",
                    icon: <Users size={18} className="skill-icon" />
                },
                {
                    text: "Technologies: Java, Liferay 6.2, PostgreSQL, Figma, Agile methodologies.",
                    icon: <Server size={18} className="skill-icon" />
                }
            ]
        },
        // Expérience 3 - Faculty of Pharmacology
        {
            title: "UX & Game Designer (Internship + Fixed-Term Contract) at Faculty of Pharmacology - Nancy, France",
            description: "Contributed to the development of a serious game designed to prepare pharmacy students for real-life situations. Period: 2/2016 - 2/2017",
            responsibilities: [
                {
                    text: "Involved in UI design, gameplay balancing, and reward system setup.",
                    icon: <PenTool size={18} className="skill-icon" />
                },
                {
                    text: "Contributed to script writing for educational scenarios within the game.",
                    icon: <BookOpen size={18} className="skill-icon" />
                },
                {
                    text: "Directed video content with actors to create realistic pharmacy scenarios.",
                    icon: <VideoIcon size={18} className="skill-icon" />
                },
                {
                    text: "Conducted interviews with healthcare professionals and researchers to ensure the game's educational accuracy and realism.",
                    icon: <Users size={18} className="skill-icon" />
                },
                {
                    text: "Collaborated on educational game mechanics that effectively taught pharmacy protocols while maintaining player engagement.",
                    icon: <Bot size={18} className="skill-icon" />
                }
            ]
        }
    ];

    const currentExperience = experiences[experienceIndex] || experiences[0];

    return (
        <>
            <h3 className="job-title">{currentExperience.title}</h3>
           
            <p className="job-description">
                {currentExperience.description}
            </p>
           
            <ul className="responsibilities-list">
                {currentExperience.responsibilities.map((item, index) => (
                <li key={index} className="responsibility-item">
                    <span className="bullet-point">{item.icon}</span>
                    <span>{item.text}</span>
                </li>
                ))}
            </ul>
        </>
    );
};

export default Experience;