import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import {
    FacebookRounded,
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  background-color: #2E1F5D;
  clip-path: polygon(0 25%, 100% 0%, 100% 80%, 0% 100%, 0 20%);
`;

const FooterBackground = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 2rem;
  color: white;
  position: relative; /* Keeps content above background */
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: #d8b4fe;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d8b4fe;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  font-size: 2rem;
  color: white;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #d8b4fe;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: #ddd;
  text-align: center;
  max-width: 800px;
`;

const Footer = () => {
    const [active, setActive] = useState("");

    return (
        <FooterContainer>
            <FooterBackground>
                <FooterWrapper>
                    <Logo className="mt-12">Let's talk about your project</Logo>
                    <SocialMediaIcons>
                        <SocialMediaIcon href="https://www.facebook.com/profile.php?id=100023259589977" target="_blank">
                            <FacebookRounded />    
                        </SocialMediaIcon>
                        <SocialMediaIcon href="https://www.linkedin.com/in/umer-amin-durrani/" target="_blank">
                            <LinkedIn />
                        </SocialMediaIcon>
                        <SocialMediaIcon href="https://www.instagram.com/pathan__umar69/" target="_blank">
                            <Instagram />
                        </SocialMediaIcon>
                        <SocialMediaIcon href="https://github.com/umer-amin" target="_blank">
                        <GitHub/>
                        </SocialMediaIcon>
                    </SocialMediaIcons>
                    <SocialMediaIcon href="https://www.upwork.com/services/consultation/marketing-umer-amin-1765666911954042880?ref=project_share" target="_blank">
                            <button className="h-10 w-60 text-[18px] bg-purple-800 rounded-xl hover:bg-purple-700">Book a Consultation</button>
                        </SocialMediaIcon>
                        
                    <Copyright>
                        &copy; 2025 Umer. All Rights Reserved.
                    </Copyright>
                </FooterWrapper>
            </FooterBackground>
        </FooterContainer>
    );
};

export default Footer;
