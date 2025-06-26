import { motion } from 'framer-motion';
import { skills } from '../../constants/skills';
import { SkillsContainer, SkillItem, SkillInfo, SkillBar } from './styles';

const Skills = () => {
  return (
    <section className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
        
        <SkillsContainer>
          {skills.map((skill) => (
            <SkillItem key={skill.name}>
              <SkillInfo>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </SkillInfo>
              <SkillBar>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  style={{ backgroundColor: skill.color }}
                />
              </SkillBar>
            </SkillItem>
          ))}
        </SkillsContainer>
      </motion.div>
    </section>
  );
};

export default Skills;
