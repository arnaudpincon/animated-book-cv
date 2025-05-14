// Page.ts
import React from 'react';
import type { PageProps } from '../types/page';

export const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.title}</h2>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">- {props.number} -</div>
      </div>
    </div>
  );
});

export const PageCover = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

export const PageChapter = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h1 className="page-chapter-header">{props.title}</h1>
        <div className="page-footer">- {props.number} -</div>
      </div>
    </div>
  );
});

export const PageInvisible = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page page-invisible" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});