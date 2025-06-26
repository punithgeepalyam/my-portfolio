import { motion } from 'framer-motion';
import { SkillItem, SkillInfo, SkillBarContainer, SkillLevel } from './style';

type Skill = {
  name: string;
  level: number;
  color: string;
};

type SkillBarProps = {
  skill: Skill;
  index: number;
};

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <SkillItem
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SkillInfo>
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </SkillInfo>
      <SkillBarContainer>
        <SkillLevel
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
          $color={skill.color}
        />
      </SkillBarContainer>
    </SkillItem>
  );
};

export default SkillBar;