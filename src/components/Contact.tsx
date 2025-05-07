import React from 'react';
import {
  Phone, Mail, MapPin, Linkedin, FileJson, Palette,
  Atom, ArrowRight, Server, LifeBuoy, Zap, Cloud, Container,
  type LucideIcon
} from "lucide-react";
import '../components/styles/contact.css';

// Définition des interfaces
interface ContactItem {
  name: string;
  icon: string;
  type: "copy" | "link";
  value: string;
}

interface IconMap {
  [key: string]: LucideIcon;
}

const Contacts: React.FC = () => {
  // Logos data with icons from lucide-react
  const contacts: ContactItem[] = [
    { name: "arnaud04.pincon@gmail.com", icon: "Mail", type: "copy", value: "arnaud04.pincon@gmail.com" },
    { name: "+61 481283801", icon: "Phone", type: "copy", value: "+61 481283801" },
    { name: "/in/arnaud-pinçon/", icon: "Linkedin", type: "link", value: "https://www.linkedin.com/in/arnaud-pin%C3%A7on/" },
    { name: "Sydney, Australia", icon: "MapPin", type: "link", value: "https://www.google.com/maps/place/Sydney+NSW,+Australia" },
  ];
 
  const references: ContactItem[] = [
    { name: "Emmanuel Goutallier | Partner Executive | APAC - onepoint", icon: "Atom", type: "link", value: "https://www.linkedin.com/in/emmanuel-goutallier-880b0511/?originalSubdomain=au" },
    { name: "Siham Nouar | Head of Digital Platform | APAC - onepoint", icon: "ArrowRight", type: "link", value: "https://www.linkedin.com/in/sihamnouar/" },
    { name: "Adrien Follin | CTO | APAC - onepoint", icon: "Server", type: "link", value: "https://www.linkedin.com/in/adrienfollin/" },
    { name: "Cécile Rioult | Project/Product Manager & Agile Delivery Lead", icon: "Server", type: "link", value: "https://www.linkedin.com/in/cecile-rioult-boczmak/?originalSubdomain=sg" },
  ];
 
  // Function to get the icon component based on name
  const getIcon = (iconName: string): LucideIcon => {
    const icons: IconMap = {
      Phone, Mail, MapPin, Linkedin, FileJson, Palette,
      Atom, ArrowRight, Server, LifeBuoy, Zap, Cloud, Container
    };
    return icons[iconName];
  };
  
  // Fonction pour gérer les clics
  const handleClick = (item: ContactItem): void => {
    if (item.type === "copy") {
      // Copier dans le presse-papier
      navigator.clipboard.writeText(item.value)
        .then(() => {
          // Afficher un message de confirmation
          alert(`"${item.value}" copied to the clipboard `);
        })
        .catch(err => {
          console.error('Error to copy :', err);
        });
    } else if (item.type === "link") {
      // Ouvrir un lien
      window.open(item.value, '_blank');
    }
  };
  
  return (
    <div className="contact-container">
      <div className="grid-container">
        <div className="section">
          <h3 className="section-title">Contacts</h3>
          <div className="contact-grid">
            {contacts.map((contact, index) => {
              const IconComponent = getIcon(contact.icon);
              return (
                <div
                  key={index}
                  className="contact-card"
                  onClick={() => handleClick(contact)}
                  style={{ cursor: 'pointer' }}
                >
                  <IconComponent size={20} className="contact-icon" />
                  <span className="contact-name">{contact.name}</span>
                </div>
              );
            })}
          </div>
        </div>
             
        <div className="section">
          <h3 className="section-title">References</h3>
          <div className="contact-grid">
            {references.map((reference, index) => {
              const IconComponent = getIcon(reference.icon);
              return (
                <div
                  key={index}
                  className="contact-card"
                  onClick={() => handleClick(reference)}
                  style={{ cursor: 'pointer' }}
                >
                  <IconComponent size={20} className="contact-icon" />
                  <span className="contact-name">{reference.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;