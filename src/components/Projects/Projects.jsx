import React from 'react';
import styles from './ProjectsStyles.module.css';
import dbImg from '../../assets/projects_img/daily_growth_img.png';
import netImg from '../../assets/projects_img/netauto_img.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='secTitle'>Projects</h1>
        <div className={styles.projContainer}>
            <ProjectCard src={dbImg} link='https://github.com/seunsods1/Daily_Growth_App/' h3='Daily Growth' p='Wellness App'/>
            <ProjectCard src={netImg} link='https://github.com/seunsods1/Network_Automation/' h3='Network Automation' p='Computer Networking'/>
        </div>
    </section>
  )
}

export default Projects;