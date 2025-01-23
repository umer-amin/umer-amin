import React, { useState } from "react";
import { skills } from "./const";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: 1100px;
  justify-content: center;
`;

const SkillCategory = styled.div`
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  transform-style: preserve-3d;
  
  &:hover {
    cursor: pointer;
    transform: rotateY(20deg) rotateX(-20deg);
  }
  
  &:active {
    transform: rotateY(0deg) rotateX(0deg);
  }
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
  color: ${({ theme }) => theme.text_secondary || "#A0AEC0"};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary || "#E2E8F0"};
`;

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

const Skills = () => {
  return (
    <Container>
      <Title>My Skills</Title>
      <SkillsGrid>
        {skills.map((category, index) => (
          <SkillCategory key={index}>
            <SkillTitle>{category.title}</SkillTitle>
            <SkillList>
              {category.skills.map((skill, idx) => (
                <SkillItem key={idx}>
                  <SkillImage src={skill.image} alt={skill.name} />
                  <span>{skill.name}</span>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Container>
  );
};

export default Skills;
