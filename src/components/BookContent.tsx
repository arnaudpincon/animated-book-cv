// BookContent.tsx
import { Page, PageChapter, PageCover } from './Page';
import { Cover } from './Cover';
import TableContent from './TableContent';
import { Presentation } from './Presentation';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contacts from './Contact';
import { Experience } from './Experience';

export const getBookPages = () => {
  return [
    <PageCover key="cover-front" number="0"><Cover /></PageCover>,
    <PageCover key="cover-inside" number="0"></PageCover>,
    <Page key="table-contents" number="1" title="Table of Contents"><TableContent /></Page>,
    <Page key="summary-1" number="2" title="Summary"><Presentation /></Page>,
    <Page key="summary-2" number="3" title="Summary"><Skills /></Page>,
    <Page key="summary-3" number="4" title="Summary"><Contacts /></Page>,
    <PageChapter key="exp-chapter" number="5" title="Experience"></PageChapter>,
    <Page key="exp-1" number="6" title="Experience: Oct. 2021 → May 2025"><Experience /></Page>,
    <Page key="exp-2" number="7" title="Experience: Sep. 2018 → Jan. 2020"><Experience experienceIndex={1} /></Page>,
    <Page key="exp-3" number="8" title="Experience: Feb. 2016 → Feb. 2017"><Experience experienceIndex={2} /></Page>,
    <PageChapter key="edu-chapter" number="9" title="Education"></PageChapter>,
    <Page key="edu-1" number="10" title="Education"><Education /></Page>,
    <Page key="edu-2" number="11" title="Education"><Education index1={3} index2={5} /></Page>,
    <PageChapter key="empty-chapter" number="12"></PageChapter>,
    <PageChapter key="projects-chapter" number="13" title="Projects"></PageChapter>,
    <Page key="proj-1" number="14" title="Projects"><Projects /></Page>,
    <Page key="proj-2" number="15" title="Projects"><Projects index1={1} index2={2} /></Page>,
    <Page key="proj-3" number="16" title="Projects"><Projects index1={2} index2={3} /></Page>,
    <Page key="proj-4" number="17" title="Projects"><Projects index1={3} index2={4} /></Page>,
    <Page key="proj-5" number="18" title="Projects"><Projects index1={4} index2={5} /></Page>,
    <Page key="proj-6" number="19" title="Projects"><Projects index1={5} index2={6} /></Page>,
    <Page key="proj-7" number="20" title="Projects"><Projects index1={6} index2={7} /></Page>,
    <PageCover key="cover-back" number="21"></PageCover>
  ];
};

export default getBookPages;