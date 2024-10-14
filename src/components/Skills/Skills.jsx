import styles from './SkillsStyles.module.css';
import checkIcon from '../../assets/checkmark-dark.svg';
import SkillsView from '../../common/SkillsView';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillsDisp}>
            <SkillsView src={checkIcon} skill="HTML"/>
            <SkillsView src={checkIcon} skill="CSS"/>
            <SkillsView src={checkIcon} skill="React"/>
            <SkillsView src={checkIcon} skill="JavaScript"/>
            <SkillsView src={checkIcon} skill="Python"/>
        </div>
        <hr/>
        <div className={styles.skillsDisp}>
            <SkillsView src={checkIcon} skill="C++"/>
            <SkillsView src={checkIcon} skill="Ansible"/>
            <SkillsView src={checkIcon} skill="Git"/>
            <SkillsView src={checkIcon} skill="Flask"/>
        </div>
    </section>
  );
}

export default Skills;