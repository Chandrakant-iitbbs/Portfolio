import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import personalImg from '../../assets/Chandrakant_Gupta_Photograph .jpg';

const Intro = () => {

    const scrollonTop = () => {
        window.scrollTo(0, 0);
    }

    let skills = ["Competitive Programming", "Frontend development", "Backend development", "Data Structure & Algorithm"];
    const [skillId, setSkillId] = useState(0);

    useEffect(() => {
        scrollonTop();
        const intervalId = setInterval(() => {
            setSkillId(id => (id + 1) % skills.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className={styles.introContainer} id="home">
            <div className={styles.container}>
                <div className={styles.introductionText}>
                    <div className={styles.greetings}>
                        <span className={styles.greetings1}>Hii there!</span><br />
                        <span className={styles.greetings2}>I'm </span>
                        <span className={styles.greetings1}>Chandrakant Gupta</span>
                    </div><br />
                    <div className={styles.domainInfo}>
                        <div className={styles.domainTxt}>I am into </div>
                        <div className={styles.domainAni}>{skills[skillId]}</div>
                    </div>
                </div>
                <div className={styles.introImg}><img src={personalImg} alt="Dev" width="100%"/></div>
            </div>
            <div className={styles.introDescription}>
                <p>
                    I'm working on MERN stack development. I'm a
                    passionate full stack Developer who loves building and understanding
                    both front-end & backend architectures. I am also into Competitive
                    Programming which helps me to improve my problem-solving and
                    logic-building capabilities.
                    I belong to Madhya Pradesh state which also called Heart of India
                    because it occupies a central place in the country.
                    My communicative languages are Hindi & English.
                    I'm always interested in
                    new projects and collaborations. Feel free to reach out to me. I'm
                    looking forward to working with a team highly motivated towards making
                    this world a better place to live.
                </p>
            </div>
        </div>
    );
}

export default Intro;
