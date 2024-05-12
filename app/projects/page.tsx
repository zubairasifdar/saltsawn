'use client'
import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Milleons Website',
      description: 'Landing Page made with modern UI.',
      imageUrl: '/project1.png',
      tags: ['React', 'Tailwind CSS', 'Modern UI'],
    },
    {
      title: 'Todo List',
      description: 'Functional basic todo list for portfolio.',
      imageUrl: '/project3.png',
      tags: ['Next.js', 'Functional Website', 'Modern'],
    },
    {
      title: 'Project 3',
      description: 'Description of project 3.',
      imageUrl: '/project2.png',
      tags: ['JavaScript', 'React JS', 'Tailwind CSS'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const closeDetailsOnOutsideClick = (event: MouseEvent) => {
      if (selectedProject && !document.querySelector('.project-details')?.contains(event.target as Node)) {
        closeDetails();
      }
    };

    document.addEventListener('mousedown', closeDetailsOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeDetailsOnOutsideClick);
    };
  }, [selectedProject]);

  const viewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="mt-12">
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-slate-200 shadow-lg rounded-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover object-center" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <div className="mt-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="border-slate-400 shadow-md hover:bg-slate-800 hover:text-white transition-[0.3s] border rounded-xl px-4 mt-4 py-3" onClick={() => viewDetails(project)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="project-details bg-white max-w-lg p-8 rounded-lg shadow-lg">
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeDetails}>X</button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-auto mb-4" />
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap">
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
