"use client";

import React from 'react';
import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import './Projects.css';
import ProjectContainer from './projectContainer/projectContainer';

interface Project {
  name: string;
  description: string;
  stack?: string[];
  sourceCode?: string;
  livePreview?: string;
}

const Projects: React.FC = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project: Project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;