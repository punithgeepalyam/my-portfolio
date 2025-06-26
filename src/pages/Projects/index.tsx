import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../constants/projects';
import { ProjectFilter, ProjectGrid, FilterButton } from './styles';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section className="container" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Projects</h2>
        <p>Here are some of my recent works</p>
        
        <ProjectFilter>
          {['all', 'react', 'angular', 'typescript'].map(tag => (
            <FilterButton 
              key={tag}
              active={filter === tag}
              onClick={() => setFilter(tag)}
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </FilterButton>
          ))}
        </ProjectFilter>
        
        <ProjectGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectGrid>
      </motion.div>
    </section>
  );
};

export default Projects;