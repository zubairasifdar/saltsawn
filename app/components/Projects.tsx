import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectsSection: React.FC = () => {
  // Define sample projects
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

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;