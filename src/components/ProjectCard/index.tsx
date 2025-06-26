import { motion } from 'framer-motion';
import { ProjectContainer, ProjectImage, ProjectContent, TechTags, ProjectLinks } from './styles';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <ProjectContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <ProjectImage>
        <img src={project.image} alt={project.title} />
      </ProjectImage>
      <ProjectContent>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechTags>
          {project.tags.map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </TechTags>
        <ProjectLinks>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live</a>
        </ProjectLinks>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectCard;
