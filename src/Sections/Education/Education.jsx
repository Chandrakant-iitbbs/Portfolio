import styles from './styles.module.css';
import EducationCard from './EducationCard';
import universityLogo from '../../assets/iitbbsLogo.png';
import super100 from '../../assets/SchoolLogoSCBOSE.png';

const Education = () => {
    let info = [
        {
            "logo": universityLogo,
            "title": "Indian Institute of Technology Bhubaneswar, Orissa",
            "major": "Civil Engineering",
            "degree": "Bachelor of Technology",
            "duration": "Nov 2021 - July 2025"
        }, {
            "logo": super100,
            "title": "Govt. Subhash Higher Secondary School for Excellence, Bhopal (MP)",
            "major": "Mathematics",
            "degree": "High School",
            "duration": "2019-2021"
        }
    ]
    return (
        <div className={styles.EduSection} id="education">
            <div className={styles.eduContainer}>
                <div className={styles.eduTitle}>Education</div>
                {info.map((item, index) => {
                    return <EducationCard key={index} info={item} />
                }
                )}
            </div>
        </div>
    );
}

export default Education;
