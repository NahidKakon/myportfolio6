"use client"

import Image from 'next/image';
import { skills } from '../utils/dataBase';
import Progress from '../components/Progress';
// import { Card } from '@/components/ui/card-hover-effect';
// import { CardContainer } from '@/components/ui/3d-card';
// import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
// import { useState } from "react";
// import { FullScreen } from '@tsparticles/engine';
import ImageZoom from '../components/ImageZoom';
import name from '../components/Name';


function AboutSection() {
  return (

      <section
    
      id="about-Me"
      className="flex flex-col max-w-6xl mx-auto md:flex-row items-center justify-center md:gap-[3rem] md:my-[6rem]"
    >
    
   <ImageZoom src="/key_skills.gif" alt="Zoomable Image" width={2000} height={1000} />
   
      <div className="self-center justify-self-center">

        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className="mb-4 text-black">
        Recent graduate of an AI-driven Software Engineering bootcamp at Skills City. 
        <br/>Earlier I did graduation in engineering, part of my education I built strong foundation on programming and design through learning GW-Basic, HTML, Delphi, AutoCAD, Gerber, Grafis, Investronica, Photoshop. My passion in IT motivated me doing AISE Bootcamp at Skills City to quickly develop my skills to move into this sector.<br/>As a career changer, transitioning into the IT sector, I am coming with a wealth of transferable skills in decision-making, problem-solving, communication, and teamwork, cultivated through my previous career experiences.
I am bringing a fresh perspective and a strong commitment to success in the tech industry.</p>
        {skills.map((skill, index) => (
          <Progress
            key={index}
            name={skill.name}
            value={skill.value}
          />
        ))}


      </div>
      
    </section>
  );
}

export default AboutSection;
