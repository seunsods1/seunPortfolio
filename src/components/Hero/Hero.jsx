import styles from './HeroStyles.module.css';
import mainImg from '../../assets/hero-img.webp';
import dispModeIcon from '../../assets/sun.svg';
import linkedinIcon from '../../assets/linkedin-dark.svg';
import githubIcon from '../../assets/github-dark.svg';
import resume from '../../assets/resume/SeunSodimu_Dev_Resume.pdf'
/*import { useTheme } from '../../common/ThemeContext';*/

function Hero() {
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.mainContainer}>
                <img 
                    className={styles.hero} 
                    src={mainImg} 
                    alt="Seun's profile pic" 
                />
                {/*
                <img
                    className={styles.dispMode}
                    src={dispModeIcon}
                    alt="disp mode icon"
                />
                */}
            </div>
            <div className={styles.dets}>
                <h1>
                    Seun
                    <br />
                    Sodimu
                </h1>
                <h2>Jr. Software Developer</h2>
                <span>
                    <a href="https://github.com/seunsods1" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/seun-sodimu-779551a4/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.desc}>
                    I am an Aspiring Software Developer with experience in Python, C++ and Javascript. I am hoping to showcase my creativity and out of the box thinking on here. Thank you for taking the time to assess my work.
                </p>
                <a href={"https://drive.google.com/file/d/1DCbDWZDQAvJGpOVVH-KQk8VUAKlYllct/view?usp=sharing"} view target="_blank">
                    <button className="hover">
                        View Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;