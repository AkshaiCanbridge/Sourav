// app/project/[id]/page.js

import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import DynamicPrjHero from '../../components/PrjHero';
import DynamicPrjAbout from '../../components/PrjAbout';
import DynamicProblem from '../../components/Problem';
import DynamicSolution from '../../components/Solution';
import DynamicConcept from '../../components/Concept';
import { getProjectById, getAllProjectIds } from '../../lib/ProjectsData';
import Footer from '@/app/components/Footer';

// Generate static params for all projects (optional but recommended for performance)
export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({
    id: id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Our Projects`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <DynamicPrjHero data={project.hero} />
      <DynamicPrjAbout data={project.about} />
      <DynamicProblem data={project.problem} />
      <DynamicSolution data={project.solution} />
      <DynamicConcept data={project.concept} />
      <Footer />
    </div>
  );
}